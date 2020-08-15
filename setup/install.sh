#! /bin/bash

function printHelp {
    echo "Mandatory arguments:"
    echo "    -n | --name {NAME}    container name"
    echo "Optional arguments"
    echo "    -bg | --background    if option is set, specifies if container will run detached or not"
}

# script to setup docker and build docker file

# gets full path including script
#SOURCE=`realpath $0`

# gets directory path to script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
BACKGROUND="false"


# displays all arguments
if test "$#" -eq 0; then
    printHelp
    exit 1
fi

NAMEFOUND=false

# check for docker name and whether to run in the background or not
while test "$#" -gt 0; do
    case "$1" in
        -bg|--background)
            shift
            export BACKGROUND="true"
            ;;
        -n|--name)
            shift
            if test $# -gt 0; then
                if test $1 == "-h"; then
                    printHelp
                    exit 1
                elif test $1 == "--help"; then
                    printHelp
                    exit 1
                else
                    export NAME=$1
                    NAMEFOUND="true"
                fi
            else
                echo "No image name specified"
                exit 1
            fi
            shift
            ;;
        -h|--help)
            shift
            printHelp
            exit 1
            ;;
    esac
done

if [ $NAMEFOUND != "true" ]; then
    echo "Name is required!"
    printHelp
    exit 1
fi

#check if running as root
if test "$EUID" -ne 0; then
    echo "Please run as root"
    exit 1
fi

# Check if docker installed
if ! command -v docker &> /dev/null; then
    echo "Please install docker and retry the script."
    exit 1
fi

# check if docker is running
pgrep docker >/dev/null 2>&1

#check return status of last command
if [ $? -ne 0 ]; then
    echo "Starting docker..."
    sudo systemctl start docker >/dev/null 2>&1

    if test "$?" -ne 0; then
        echo "Unable to start docker, please check 'systemctl status docker' OR 'journalctl -xe'"
        exit 1
    fi

    echo "Enabling docker..."
    sudo systemctl enable docker >/dev/null 2>&1

    if test "$?" -ne 0; then
        echo "Unable to enable docker service, please enable manually."
        exit 1
    fi
fi

# Checks if docker image exists
EXISTS=$(docker images -q $NAME 2> /dev/null)
# Check if image is running
RUNNING=$(docker inspect $NAME | grep \"Running\")
echo $RUNNING

# if docker image exists
# and if docker image is running
# stop image
# then remove docker image
if [ "$EXISTS" != "" ]; then
    if [ "$RUNNING" = '"Running": true,' ]; then
        echo "Stopping container..."
        docker stop $NAME
    fi
    echo "Removing container..."
    docker rm $NAME
fi

# build image
echo "Building container..."
docker build $DIR/. --tag $NAME

# Run image
if test "$BACKGROUND" = "true"; then
    echo "Running detached container..."
    docker run -p 80:80 --name $NAME -d $NAME
else
    echo "Running container..."
    docker run -p 80:80 --name $NAME $NAME
fi