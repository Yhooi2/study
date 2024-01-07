#!/bin/bash
if [ !-d "./attachments" ]; then
 mkdir ./attachments/
 fi
for (( i=0; i<20; i++ ))
do
 curl https://picsum.photos/800/400 -L > ./attachments/file_name$i
done