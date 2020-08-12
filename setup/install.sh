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

docker build $DIR/dockerfile


