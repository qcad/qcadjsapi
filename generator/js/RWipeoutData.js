
      // auto generated
      //var self;

      // class constructor:
      function RWipeoutData() {
        

        // should be RWipeoutData_BaseJs.call(this, engine):
        //RWipeoutData.prototype = new RWipeoutData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RWipeoutData.getIdStatic()))) {

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
            qWarning("RWipeoutData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RWipeoutData_Wrapper(
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

      

        //copyProperties(this, wrapper, RWipeoutData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RWipeoutData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RWipeoutData);
  }

  
  else {
    
        print("RWipeoutData(): wrong number / type of arguments");
      
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

      //RWipeoutData.prototype = new RWipeoutData_BaseJs(engine);
      //RWipeoutData.prototype = new RWipeoutData_Wrapper(engine);
      RWipeoutData.prototype = new Object();

      RWipeoutData.prototype.toString = function() {
          //return "RWipeoutData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RWipeoutData [JS]";
        };
      RWipeoutData.getObjectType = function() {
        return RJSType_RWipeoutData.getIdStatic();
      };

      RWipeoutData.prototype.getObjectType = function() {
        return RJSType_RWipeoutData.getIdStatic();
      };

      RWipeoutData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RWipeoutData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPolylineData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RWipeoutData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RWipeoutData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RWipeoutData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RWipeoutData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RWipeoutData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RWipeoutData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RWipeoutData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RWipeoutData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RWipeoutData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RWipeoutData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RWipeoutData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RWipeoutData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RWipeoutData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RWipeoutData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RWipeoutData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RWipeoutData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RWipeoutData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RWipeoutData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RWipeoutData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RWipeoutData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RWipeoutData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RWipeoutData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RWipeoutData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RWipeoutData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RWipeoutData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RWipeoutData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RWipeoutData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RWipeoutData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RWipeoutData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RWipeoutData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RWipeoutData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RWipeoutData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RWipeoutData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RWipeoutData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RWipeoutData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RWipeoutData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RWipeoutData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RWipeoutData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RWipeoutData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RWipeoutData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RWipeoutData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RWipeoutData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RWipeoutData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RWipeoutData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RWipeoutData.prototype.update = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RWipeoutData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RWipeoutData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RWipeoutData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RWipeoutData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RWipeoutData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RWipeoutData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RWipeoutData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RWipeoutData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RWipeoutData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RWipeoutData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RWipeoutData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RWipeoutData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RWipeoutData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RWipeoutData.prototype.move = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RWipeoutData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RWipeoutData.prototype.scale = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RWipeoutData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RWipeoutData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RWipeoutData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RWipeoutData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RWipeoutData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RWipeoutData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RWipeoutData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RWipeoutData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RWipeoutData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RWipeoutData.prototype.getPolylineShape = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getPolylineShape");
          return this.__PROXY__.getPolylineShape(...args);
        };
    
        // function 
        RWipeoutData.prototype.clear = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RWipeoutData.prototype.normalize = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RWipeoutData.prototype.getVertices = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getVertices");
          return this.__PROXY__.getVertices(...args);
        };
    
        // function 
        RWipeoutData.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RWipeoutData.prototype.prependVertex = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.prependVertex");
          return this.__PROXY__.prependVertex(...args);
        };
    
        // function 
        RWipeoutData.prototype.insertVertex = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.insertVertex");
          return this.__PROXY__.insertVertex(...args);
        };
    
        // function 
        RWipeoutData.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    
        // function 
        RWipeoutData.prototype.removeVertex = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.removeVertex");
          return this.__PROXY__.removeVertex(...args);
        };
    
        // function 
        RWipeoutData.prototype.countSegments = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.countSegments");
          return this.__PROXY__.countSegments(...args);
        };
    
        // function 
        RWipeoutData.prototype.getSegmentAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getSegmentAt");
          return this.__PROXY__.getSegmentAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.getBulgeAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getBulgeAt");
          return this.__PROXY__.getBulgeAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.setBulgeAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setBulgeAt");
          return this.__PROXY__.setBulgeAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.getVertexAngle = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getVertexAngle");
          return this.__PROXY__.getVertexAngle(...args);
        };
    
        // function 
        RWipeoutData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RWipeoutData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RWipeoutData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RWipeoutData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RWipeoutData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RWipeoutData.prototype.relocateStartPoint = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.relocateStartPoint");
          return this.__PROXY__.relocateStartPoint(...args);
        };
    
        // function 
        RWipeoutData.prototype.setClosed = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setClosed");
          return this.__PROXY__.setClosed(...args);
        };
    
        // function 
        RWipeoutData.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RWipeoutData.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RWipeoutData.prototype.autoClose = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.autoClose");
          return this.__PROXY__.autoClose(...args);
        };
    
        // function 
        RWipeoutData.prototype.toLogicallyClosed = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.toLogicallyClosed");
          return this.__PROXY__.toLogicallyClosed(...args);
        };
    
        // function 
        RWipeoutData.prototype.toLogicallyOpen = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.toLogicallyOpen");
          return this.__PROXY__.toLogicallyOpen(...args);
        };
    
        // function 
        RWipeoutData.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getOrientation");
          return this.__PROXY__.getOrientation(...args);
        };
    
        // function 
        RWipeoutData.prototype.setGlobalWidth = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setGlobalWidth");
          return this.__PROXY__.setGlobalWidth(...args);
        };
    
        // function 
        RWipeoutData.prototype.setStartWidthAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setStartWidthAt");
          return this.__PROXY__.setStartWidthAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.getStartWidthAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getStartWidthAt");
          return this.__PROXY__.getStartWidthAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.setEndWidthAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setEndWidthAt");
          return this.__PROXY__.setEndWidthAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.getEndWidthAt = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getEndWidthAt");
          return this.__PROXY__.getEndWidthAt(...args);
        };
    
        // function 
        RWipeoutData.prototype.hasWidths = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.hasWidths");
          return this.__PROXY__.hasWidths(...args);
        };
    
        // function 
        RWipeoutData.prototype.setStartWidths = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setStartWidths");
          return this.__PROXY__.setStartWidths(...args);
        };
    
        // function 
        RWipeoutData.prototype.getStartWidths = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getStartWidths");
          return this.__PROXY__.getStartWidths(...args);
        };
    
        // function 
        RWipeoutData.prototype.setEndWidths = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setEndWidths");
          return this.__PROXY__.setEndWidths(...args);
        };
    
        // function 
        RWipeoutData.prototype.getEndWidths = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getEndWidths");
          return this.__PROXY__.getEndWidths(...args);
        };
    
        // function 
        RWipeoutData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RWipeoutData.prototype.toPainterPath = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.toPainterPath");
          return this.__PROXY__.toPainterPath(...args);
        };
    
        // function 
        RWipeoutData.prototype.simplify = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RWipeoutData.prototype.roundAllCorners = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.roundAllCorners");
          return this.__PROXY__.roundAllCorners(...args);
        };
    
        // function 
        RWipeoutData.prototype.verifyTangency = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.verifyTangency");
          return this.__PROXY__.verifyTangency(...args);
        };
    
        // function 
        RWipeoutData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RWipeoutData.prototype.setPolylineGen = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setPolylineGen");
          return this.__PROXY__.setPolylineGen(...args);
        };
    
        // function 
        RWipeoutData.prototype.getPolylineGen = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getPolylineGen");
          return this.__PROXY__.getPolylineGen(...args);
        };
    
        // function 
        RWipeoutData.prototype.setElevation = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setElevation");
          return this.__PROXY__.setElevation(...args);
        };
    
        // function 
        RWipeoutData.prototype.getElevation = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getElevation");
          return this.__PROXY__.getElevation(...args);
        };
    
        // function 
        RWipeoutData.prototype.getType = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RWipeoutData.prototype.getShowFrame = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getShowFrame");
          return this.__PROXY__.getShowFrame(...args);
        };
    
        // function 
        RWipeoutData.prototype.setShowFrame = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.setShowFrame");
          return this.__PROXY__.setShowFrame(...args);
        };
    
        // function 
        RWipeoutData.prototype.getBoundary = function(...args) 
          
        {
          //print("JS: RWipeoutData.prototype.getBoundary");
          return this.__PROXY__.getBoundary(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RWipeoutData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RWipeoutData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RWipeoutData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      