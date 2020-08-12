#! /bin/bash

# script to setup docker and build docker file

DIR=`realpath $0`

if [ "$EUID" -ne 0 ]
    then echo "Please run as root"
    exit
fi

if ! command -v docker &> /dev/null
    then echo "Please install docker and retry the script."
    exit
fi

# check for docker name and whether to run in the background or not
while test $# -gt 0; do
    case "$1" in
        -bg|--background)
            shift
            export BACKGROUND=true
            ;;
        -n|--name)
            shift
            if test $# -gt 0; then
                export NAME=$1
            else
                echo "No image name specified"
                exit 1
            fi
            shift
            ;;
    esac
done

# check if docker is running
pgrep docker >/dev/null 2>&1

#check return status of last command
if [ $? -eq 0 ]

    sudo systemctl start docker >/dev/null 2>&1

    if [ $? -ne 0 ]
        then echo "Unable to start docker, please check 'systemctl status docker' OR 'journalctl -xe'"
        exit
    fi

    sudo systemctl enable docker >/dev/null 2>&1

    if [ $? -ne 0 ]
        then echo "Unable to enable docker service, please enable manually."
    fi
fi

docker build $DIR/. --tag $NAME
docker run $NAME



