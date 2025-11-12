#!/bin/bash

EXTENSION_VERSION=`grep version-name metadata.json | cut -f4 -d\"`
EXTENSION_ZIP="disable-three-finger-gestures-redux-$EXTENSION_VERSION.zip"
zip -r $EXTENSION_ZIP extension.js LICENSE metadata.json prefs.js README.md schemas
gnome-extensions install $EXTENSION_ZIP

