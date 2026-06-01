/*! Image Map Resizer
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2014-15 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

// heavily modified by me

;(function() {
  'use strict'

  function scaleImageMap() {
    function resizeMap() {
      function resizeAreaTag(cachedAreaCoords, idx) {
        function scale(coord) {
          var dimension = 1 === (isWidth = 1 - isWidth) ? 'width' : 'height'
          return (
            padding[dimension] +
            Math.floor(Number(coord) * scalingFactor[dimension])
          )
        }

        var isWidth = 0
        areas[idx].coords = cachedAreaCoords
          .split(',')
          .map(scale)
          .join(',')
      }

      // Visible image rect after object-fit: scale-down (= min(contain, none)).
      // image.width/height is the rendered <img> content box; the bitmap is
      // letterboxed inside it, so coords must scale to the visible rect and be
      // offset by the letterbox bars.
      var natW = image.naturalWidth,
        natH = image.naturalHeight,
        boxW = image.width,
        boxH = image.height,
        fit =
          natW <= boxW && natH <= boxH
            ? 1
            : Math.min(boxW / natW, boxH / natH),
        visibleW = natW * fit,
        visibleH = natH * fit

      var scalingFactor = {
        width: visibleW / natW,
        height: visibleH / natH,
      }

      var padding = {
        width:
          parseInt(
            window.getComputedStyle(image, null).getPropertyValue('padding-left'),
            10
          ) + (boxW - visibleW) / 2,
        height:
          parseInt(
            window.getComputedStyle(image, null).getPropertyValue('padding-top'),
            10
          ) + (boxH - visibleH) / 2,
      }

      cachedAreaCoordsArray.forEach(resizeAreaTag)
    }

    function getCoords(e) {
      //Normalize coord-string to csv format without any space chars
      return e.coords.replace(/ *, */g, ',').replace(/ +/g, ',')
    }

    function debounce() {
      clearTimeout(timer)
      timer = setTimeout(resizeMap, 250)
    }

    function start() {
      if (
        image.width !== image.naturalWidth ||
        image.height !== image.naturalHeight
      ) {
        resizeMap()
      }
    }

    function addEventListeners() {
      window.addEventListener('resize', debounce, false)
    }

    function beenHere() {
      return 'function' === typeof map._resize
    }

    function getImg(name) {
      return document.querySelector('img[usemap="' + name + '"]')
    }

    function setup() {
      areas = map.getElementsByTagName('area')
      cachedAreaCoordsArray = Array.prototype.map.call(areas, getCoords)
      image = getImg('#' + map.name) || getImg(map.name)
      if (image !== null) {
        map._resize = resizeMap //Bind resize method to HTML map element
      }
    }

    var /*jshint validthis:true */
      map = this,
      areas = null,
      cachedAreaCoordsArray = null,
      image = null,
      timer = null

    if (!beenHere()) {
      setup()
      if (image !== null) {
        addEventListeners()
        start()
      }
    } else {
      map._resize() //Already setup, so just resize map
    }
  }

  function factory() {
    function chkMap(element) {
      if (!element.tagName) {
        throw new TypeError('Object is not a valid DOM element')
      } else if ('MAP' !== element.tagName.toUpperCase()) {
        throw new TypeError(
          'Expected <MAP> tag, found <' + element.tagName + '>.'
        )
      }
    }

    function init(element) {
      if (element) {
        chkMap(element)
        scaleImageMap.call(element)
        maps.push(element)
      }
    }

    var maps

    return function imageMapResizeF(target) {
      maps = [] // Only return maps from this call

      switch (typeof target) {
        case 'undefined':
        case 'string':
          Array.prototype.forEach.call(
            document.querySelectorAll(target || 'map'),
            init
          )
          break
        case 'object':
          init(target)
          break
        default:
          throw new TypeError('Unexpected data type (' + typeof target + ').')
      }

      return maps
    }
  }

  window.imageMapResize = factory()
})()
