
      // auto generated
      //var self;

      // class constructor:
      function RXLineData() {
        

        // should be RXLineData_BaseJs.call(this, engine):
        //RXLineData.prototype = new RXLineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RXLineData.getIdStatic()))) {

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
            qWarning("RXLineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RXLineData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLineData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RXLineData_Wrapper(
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

      

        //copyProperties(this, wrapper, RXLineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RXLineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLineData);
  }

  
  else {
    
        print("RXLineData(): wrong number / type of arguments");
      
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

      //RXLineData.prototype = new RXLineData_BaseJs(engine);
      //RXLineData.prototype = new RXLineData_Wrapper(engine);
      RXLineData.prototype = new Object();

      RXLineData.prototype.toString = function() {
          //return "RXLineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RXLineData [JS]";
        };
      RXLineData.getObjectType = function() {
        return RJSType_RXLineData.getIdStatic();
      };

      RXLineData.prototype.getObjectType = function() {
        return RJSType_RXLineData.getIdStatic();
      };

      RXLineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RXLineData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RXLine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RXLineData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RXLineData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RXLineData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RXLineData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RXLineData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RXLineData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RXLineData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RXLineData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RXLineData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RXLineData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RXLineData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RXLineData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RXLineData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RXLineData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RXLineData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RXLineData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RXLineData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RXLineData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RXLineData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RXLineData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RXLineData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RXLineData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RXLineData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RXLineData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RXLineData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RXLineData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RXLineData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RXLineData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RXLineData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RXLineData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RXLineData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RXLineData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RXLineData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RXLineData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RXLineData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RXLineData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RXLineData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RXLineData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RXLineData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RXLineData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RXLineData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RXLineData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RXLineData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RXLineData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RXLineData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RXLineData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RXLineData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RXLineData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RXLineData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RXLineData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RXLineData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RXLineData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RXLineData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RXLineData.prototype.update = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RXLineData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RXLineData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RXLineData.prototype.getLineShape = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLineShape");
          return this.__PROXY__.getLineShape(...args);
        };
    
        // function 
        RXLineData.prototype.clone = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RXLineData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RXLineData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RXLineData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RXLineData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RXLineData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RXLineData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RXLineData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RXLineData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RXLineData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RXLineData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RXLineData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RXLineData.prototype.setBasePoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setBasePoint");
          return this.__PROXY__.setBasePoint(...args);
        };
    
        // function 
        RXLineData.prototype.getSecondPoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getSecondPoint");
          return this.__PROXY__.getSecondPoint(...args);
        };
    
        // function 
        RXLineData.prototype.setSecondPoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setSecondPoint");
          return this.__PROXY__.setSecondPoint(...args);
        };
    
        // function 
        RXLineData.prototype.setDirectionVector = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setDirectionVector");
          return this.__PROXY__.setDirectionVector(...args);
        };
    
        // function 
        RXLineData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RXLineData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RXLineData.prototype.setLength = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setLength");
          return this.__PROXY__.setLength(...args);
        };
    
        // function 
        RXLineData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RXLineData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RXLineData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RXLineData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RXLineData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RXLineData.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RXLineData.prototype.getClippedLine = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getClippedLine");
          return this.__PROXY__.getClippedLine(...args);
        };
    
        // function 
        RXLineData.prototype.move = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RXLineData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RXLineData.prototype.scale = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RXLineData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RXLineData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RXLineData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RXLineData.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RXLineData.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RXLineData.prototype.print = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RXLineData.prototype.copy = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RXLineData.prototype.getType = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RXLineData.prototype.getXLine = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getXLine");
          return this.__PROXY__.getXLine(...args);
        };
    
        // function 
        RXLineData.prototype.getBasePoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getBasePoint");
          return this.__PROXY__.getBasePoint(...args);
        };
    
        // function 
        RXLineData.prototype.getDirectionVector = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getDirectionVector");
          return this.__PROXY__.getDirectionVector(...args);
        };
    
        // function 
        RXLineData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RXLineData.prototype.hasFixedAngle = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.hasFixedAngle");
          return this.__PROXY__.hasFixedAngle(...args);
        };
    
        // function 
        RXLineData.prototype.setFixedAngle = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.setFixedAngle");
          return this.__PROXY__.setFixedAngle(...args);
        };
    
        // function 
        RXLineData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RXLineData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RXLineData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RXLineData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RXLineData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RXLineData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RXLineData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RXLineData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RXLineData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RXLineData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RXLineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RXLineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RXLineData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      