#! /bin/bash

# script to setup docker and build docker file

if [ "$EUID" -ne 0 ]
    then echo "Please run as root"
    exit
fi

sudo systemctl start docker
sudo systemctl enable docker