#!/bin/bash
# Script to cleanup docker after development/deployment/testing etc


function printHelp {
    echo "Mandatory arguments:"
    echo "    -n | --name {NAME}    container name"
    echo "Optional arguments"
    echo "    -bg | --background    if option is set, specifies if container will run detached or not"
}

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
                    set -- $1
                    NAME=$*

                    if [ $NAME != "" ]; then
                        NAME=$1
                        NAMEFOUND="true"
                    fi
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

# Checks if docker image exists
IMAGE_EXISTS=$(docker images -q $NAME 2> /dev/null)
# Checks if a process was created
PROCESS_EXISTS=$(docker ps -aqf "name=$NAME")
# Check if image is running
RUNNING=$(docker inspect $NAME | grep \"Running\")

# if docker image exists
# and if docker image is running
# stop image
# then remove docker image
if [ "$IMAGE_EXISTS" != "" ]; then

    # Remove whitespace around result
    # this was causing it to not work
    set -- $RUNNING
    RUNNING=$*

    if [ "$RUNNING" == '"Running": true,' ]; then

        echo "Stopping running container with name: $NAME..."

        if ! docker stop $NAME > /dev/null; then
            exit 1
        fi
    fi

    if [ "$PROCESS_EXISTS" != "" ]; then
        echo "Removing existing container..."
        # Removed from processes
        if ! docker rm $NAME > /dev/null; then
            exit 1
        fi
    fi

    echo "Removing existing image..."
    # Removed from images
    if ! docker rmi $(docker images -q $NAME); then
        exit 1
    fi
fi