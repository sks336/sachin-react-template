#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJ_DIR=${SCRIPT_DIR}/..

function usage()
{
   echo ""
   echo "Usage: $0 -c clean -i install -s start"
   echo -e "\t-i Build project without deleting node_modules"
   echo -e "\t-c Clean the project first before building/running"
   echo -e "\t-s Start the project"
#    exit 1 # Exit script after printing help
}

while getopts "c:i:s:" opt
do
   case "$opt" in      
      c ) c="$OPTARG" ;;
      i ) i="$OPTARG" ;;
      s ) s="$OPTARG" ;;
   esac
done

echo "value is: c {$c}, i {$i}, s {$s}"

if [[ -z $c && -z $i && -z $s ]]; then    
    echo "At least on of the argument must be there..."  ;  
    usage;
    exit;
fi
if [[ ! -z $c ]]; then
    echo "Going to delete the directory: ${PROJ_DIR}/node_modules"
    rm -rf ${PROJ_DIR}/node_modules
    echo "Directory deleted!!!"
fi

if [[ ! -z $i ]]; then
    cd $PROJ_DIR
    npm install    
fi

if [[ ! -z $s ]]; then 
    cd $PROJ_DIR
    npm start
fi