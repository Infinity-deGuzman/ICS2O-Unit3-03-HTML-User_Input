// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // this code will calculate the volume of a sphere

  // input
  const radius = parseFloat(document.getElementById("radius").value)

  // process
  const volume = (4/3) * (radius ** 3) * π

  //output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' cm³'
}
