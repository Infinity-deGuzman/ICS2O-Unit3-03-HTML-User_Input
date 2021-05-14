// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

"use math"

function enterClicked () {
  // this code will calculate the volume of a sphere

  // input
  const length = parseFloat(document.getElementById("radius").value)

  // process
  const volume = (4/3) * π * r**3

  //output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' cm³'
}
