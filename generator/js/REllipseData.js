
      // auto generated
      //var self;

      // class constructor:
      function REllipseData() {
        

        // should be REllipseData_BaseJs.call(this, engine):
        //REllipseData.prototype = new REllipseData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REllipseData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("REllipseData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 5 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new REllipseData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new REllipseData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new REllipseData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else {
    
        print("REllipseData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
        }

        

      }

      //REllipseData.prototype = new REllipseData_BaseJs(engine);
      //REllipseData.prototype = new REllipseData_Wrapper(engine);
      REllipseData.prototype = new Object();

      REllipseData.prototype.toString = function() {
          //return "REllipseData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REllipseData [JS]";
        };
      REllipseData.getObjectType = function() {
        return RJSType_REllipseData.getIdStatic();
      };

      REllipseData.prototype.getObjectType = function() {
        return RJSType_REllipseData.getIdStatic();
      };

      REllipseData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REllipseData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REllipse.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        REllipseData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        REllipseData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        REllipseData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        REllipseData.prototype.isSane = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        REllipseData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        REllipseData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        REllipseData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        REllipseData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        REllipseData.prototype.getHull = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        REllipseData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        REllipseData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        REllipseData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        REllipseData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        REllipseData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        REllipseData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        REllipseData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        REllipseData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        REllipseData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        REllipseData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        REllipseData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        REllipseData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        REllipseData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        REllipseData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        REllipseData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        REllipseData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        REllipseData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        REllipseData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        REllipseData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        REllipseData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        REllipseData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        REllipseData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        REllipseData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        REllipseData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        REllipseData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        REllipseData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        REllipseData.prototype.setColor = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        REllipseData.prototype.getColor = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        REllipseData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        REllipseData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        REllipseData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        REllipseData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        REllipseData.prototype.isInside = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        REllipseData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        REllipseData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        REllipseData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        REllipseData.prototype.update = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        REllipseData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        REllipseData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        REllipseData.prototype.clone = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        REllipseData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        REllipseData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        REllipseData.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        REllipseData.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        REllipseData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        REllipseData.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        REllipseData.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        REllipseData.prototype.setCenter = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        REllipseData.prototype.setMajorPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setMajorPoint");
          return this.__PROXY__.setMajorPoint(...args);
        };
    
        // function 
        REllipseData.prototype.switchMajorMinor = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.switchMajorMinor");
          return this.__PROXY__.switchMajorMinor(...args);
        };
    
        // function 
        REllipseData.prototype.setRatio = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setRatio");
          return this.__PROXY__.setRatio(...args);
        };
    
        // function 
        REllipseData.prototype.setStartParam = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setStartParam");
          return this.__PROXY__.setStartParam(...args);
        };
    
        // function 
        REllipseData.prototype.setEndParam = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setEndParam");
          return this.__PROXY__.setEndParam(...args);
        };
    
        // function 
        REllipseData.prototype.getStartAngle = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getStartAngle");
          return this.__PROXY__.getStartAngle(...args);
        };
    
        // function 
        REllipseData.prototype.setStartAngle = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setStartAngle");
          return this.__PROXY__.setStartAngle(...args);
        };
    
        // function 
        REllipseData.prototype.angleToParam = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.angleToParam");
          return this.__PROXY__.angleToParam(...args);
        };
    
        // function 
        REllipseData.prototype.getEndAngle = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getEndAngle");
          return this.__PROXY__.getEndAngle(...args);
        };
    
        // function 
        REllipseData.prototype.setEndAngle = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setEndAngle");
          return this.__PROXY__.setEndAngle(...args);
        };
    
        // function 
        REllipseData.prototype.getAngleLength = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getAngleLength");
          return this.__PROXY__.getAngleLength(...args);
        };
    
        // function 
        REllipseData.prototype.isAngleWithinArc = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isAngleWithinArc");
          return this.__PROXY__.isAngleWithinArc(...args);
        };
    
        // function 
        REllipseData.prototype.isParamWithinArc = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isParamWithinArc");
          return this.__PROXY__.isParamWithinArc(...args);
        };
    
        // function 
        REllipseData.prototype.isReversed = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isReversed");
          return this.__PROXY__.isReversed(...args);
        };
    
        // function 
        REllipseData.prototype.setReversed = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setReversed");
          return this.__PROXY__.setReversed(...args);
        };
    
        // function 
        REllipseData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        REllipseData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        REllipseData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        REllipseData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        REllipseData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        REllipseData.prototype.getMinorRadius = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getMinorRadius");
          return this.__PROXY__.getMinorRadius(...args);
        };
    
        // function 
        REllipseData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        REllipseData.prototype.isCircular = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isCircular");
          return this.__PROXY__.isCircular(...args);
        };
    
        // function 
        REllipseData.prototype.getSimpsonLength = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getSimpsonLength");
          return this.__PROXY__.getSimpsonLength(...args);
        };
    
        // function 
        REllipseData.prototype.contains = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        REllipseData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        REllipseData.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        REllipseData.prototype.getRadiusAt = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getRadiusAt");
          return this.__PROXY__.getRadiusAt(...args);
        };
    
        // function 
        REllipseData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        REllipseData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        REllipseData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        REllipseData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        REllipseData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        REllipseData.prototype.correctMajorMinor = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.correctMajorMinor");
          return this.__PROXY__.correctMajorMinor(...args);
        };
    
        // function 
        REllipseData.prototype.getBoxCorners = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getBoxCorners");
          return this.__PROXY__.getBoxCorners(...args);
        };
    
        // function 
        REllipseData.prototype.getTangents = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getTangents");
          return this.__PROXY__.getTangents(...args);
        };
    
        // function 
        REllipseData.prototype.approximateWithSplines = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.approximateWithSplines");
          return this.__PROXY__.approximateWithSplines(...args);
        };
    
        // function 
        REllipseData.prototype.approximateWithArcs = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.approximateWithArcs");
          return this.__PROXY__.approximateWithArcs(...args);
        };
    
        // function 
        REllipseData.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        REllipseData.prototype.splitAt = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        REllipseData.prototype.copy = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        REllipseData.prototype.getType = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        REllipseData.prototype.getEllipse = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getEllipse");
          return this.__PROXY__.getEllipse(...args);
        };
    
        // function 
        REllipseData.prototype.isValid = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        REllipseData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        REllipseData.prototype.setZ = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        REllipseData.prototype.to2D = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        REllipseData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        REllipseData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        REllipseData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        REllipseData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        REllipseData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        REllipseData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        REllipseData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        REllipseData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        REllipseData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        REllipseData.prototype.move = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        REllipseData.prototype.rotate = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        REllipseData.prototype.scale = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        REllipseData.prototype.mirror = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        REllipseData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        REllipseData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        REllipseData.prototype.stretch = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        REllipseData.prototype.getFoci = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getFoci");
          return this.__PROXY__.getFoci(...args);
        };
    
        // function 
        REllipseData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        REllipseData.prototype.getMajorRadius = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getMajorRadius");
          return this.__PROXY__.getMajorRadius(...args);
        };
    
        // function 
        REllipseData.prototype.getMajorPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getMajorPoint");
          return this.__PROXY__.getMajorPoint(...args);
        };
    
        // function 
        REllipseData.prototype.getMinorPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getMinorPoint");
          return this.__PROXY__.getMinorPoint(...args);
        };
    
        // function 
        REllipseData.prototype.setMinorPoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.setMinorPoint");
          return this.__PROXY__.setMinorPoint(...args);
        };
    
        // function 
        REllipseData.prototype.getRatio = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getRatio");
          return this.__PROXY__.getRatio(...args);
        };
    
        // function 
        REllipseData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        REllipseData.prototype.getStartParam = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getStartParam");
          return this.__PROXY__.getStartParam(...args);
        };
    
        // function 
        REllipseData.prototype.getEndParam = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getEndParam");
          return this.__PROXY__.getEndParam(...args);
        };
    
        // function 
        REllipseData.prototype.isFullEllipse = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.isFullEllipse");
          return this.__PROXY__.isFullEllipse(...args);
        };
    
        // function 
        REllipseData.prototype.getParamTo = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getParamTo");
          return this.__PROXY__.getParamTo(...args);
        };
    
        // function 
        REllipseData.prototype.getLength = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        REllipseData.prototype.getSweep = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getSweep");
          return this.__PROXY__.getSweep(...args);
        };
    
        // function 
        REllipseData.prototype.getPointAt = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getPointAt");
          return this.__PROXY__.getPointAt(...args);
        };
    
        // function 
        REllipseData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        REllipseData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        REllipseData.prototype.reverse = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        REllipseData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        REllipseData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: REllipseData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REllipseData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REllipseData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REllipseData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      