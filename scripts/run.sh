#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJ_DIR=${SCRIPT_DIR}/..

function usage()
{
   echo ""
   echo "Usage: $0 -cis"
   echo -e "\t-i Build project without deleting node_modules"
   echo -e "\t-c Clean the project first before building/running"
   echo -e "\t-s Start the project"
#    exit 1 # Exit script after printing help
}

c_flag='false'
i_flag='false'
s_flag='false'

while getopts "cis" opt
do
   case "$opt" in
      c ) c_flag='true' ;;
      i ) i_flag='true' ;;
      s ) s_flag='true' ;;
   esac
done

echo "Value is: c {$c_flag}, i {$i_flag}, s {$s_flag}"

if [[ "$c_flag" == 'false' && "$i_flag" == 'false' && "$s_flag" == false ]]; then
    echo "All flags are falsed and hence default switching to start flag on!!"
    s_flag='true'
fi

if [[ "$c_flag" == 'true' ]]; then
    echo "Going to delete the directory: ${PROJ_DIR}/node_modules"
    rm -rf ${PROJ_DIR}/node_modules
    echo "Directory deleted!!!"
fi

if [[ "$i_flag" == 'true' ]]; then
    echo 'Going to install the modules.'
    cd $PROJ_DIR
    npm install
fi

if [[ "$s_flag" == 'true' ]]; then
    echo 'Going to start the server.'
    cd $PROJ_DIR
    npm start
fi
