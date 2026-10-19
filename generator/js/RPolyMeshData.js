
      // auto generated
      //var self;

      // class constructor:
      function RPolyMeshData() {
        

        // should be RPolyMeshData_BaseJs.call(this, engine):
        //RPolyMeshData.prototype = new RPolyMeshData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolyMeshData.getIdStatic()))) {

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
            qWarning("RPolyMeshData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPolyMeshData_Wrapper(
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

      

        //copyProperties(this, wrapper, RPolyMeshData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPolyMeshData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyMeshData);
  }

  
  else {
    
        print("RPolyMeshData(): wrong number / type of arguments");
      
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

      //RPolyMeshData.prototype = new RPolyMeshData_BaseJs(engine);
      //RPolyMeshData.prototype = new RPolyMeshData_Wrapper(engine);
      RPolyMeshData.prototype = new Object();

      RPolyMeshData.prototype.toString = function() {
          //return "RPolyMeshData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolyMeshData [JS]";
        };
      RPolyMeshData.getObjectType = function() {
        return RJSType_RPolyMeshData.getIdStatic();
      };

      RPolyMeshData.prototype.getObjectType = function() {
        return RJSType_RPolyMeshData.getIdStatic();
      };

      RPolyMeshData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolyMeshData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPolyMeshData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RPolyMeshData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RPolyMeshData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPolyMeshData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RPolyMeshData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RPolyMeshData.prototype.update = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getType = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RPolyMeshData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RPolyMeshData.prototype.clear = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getVertices = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getVertices");
          return this.__PROXY__.getVertices(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setVertices = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setVertices");
          return this.__PROXY__.setVertices(...args);
        };
    
        // function 
        RPolyMeshData.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setVertexAt = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setVertexAt");
          return this.__PROXY__.setVertexAt(...args);
        };
    
        // function 
        RPolyMeshData.prototype.addVertex = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.addVertex");
          return this.__PROXY__.addVertex(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getFaces = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getFaces");
          return this.__PROXY__.getFaces(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setFaces = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setFaces");
          return this.__PROXY__.setFaces(...args);
        };
    
        // function 
        RPolyMeshData.prototype.countFaces = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.countFaces");
          return this.__PROXY__.countFaces(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getFace = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getFace");
          return this.__PROXY__.getFace(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getFaceVertexCount = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getFaceVertexCount");
          return this.__PROXY__.getFaceVertexCount(...args);
        };
    
        // function 
        RPolyMeshData.prototype.addFace = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.addFace");
          return this.__PROXY__.addFace(...args);
        };
    
        // function 
        RPolyMeshData.prototype.addTriangle = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.addTriangle");
          return this.__PROXY__.addTriangle(...args);
        };
    
        // function 
        RPolyMeshData.prototype.addQuad = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.addQuad");
          return this.__PROXY__.addQuad(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isTriangleMesh = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isTriangleMesh");
          return this.__PROXY__.isTriangleMesh(...args);
        };
    
        // function 
        RPolyMeshData.prototype.hasHiddenEdges = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.hasHiddenEdges");
          return this.__PROXY__.hasHiddenEdges(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getHiddenEdges = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getHiddenEdges");
          return this.__PROXY__.getHiddenEdges(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setHiddenEdges = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setHiddenEdges");
          return this.__PROXY__.setHiddenEdges(...args);
        };
    
        // function 
        RPolyMeshData.prototype.isEdgeHidden = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.isEdgeHidden");
          return this.__PROXY__.isEdgeHidden(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setEdgeHidden = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setEdgeHidden");
          return this.__PROXY__.setEdgeHidden(...args);
        };
    
        // function 
        RPolyMeshData.prototype.append = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.append");
          return this.__PROXY__.append(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getTriangles = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getTriangles");
          return this.__PROXY__.getTriangles(...args);
        };
    
        // function 
        RPolyMeshData.prototype.split = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.split");
          return this.__PROXY__.split(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPolyMeshData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPolyMeshData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RPolyMeshData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RPolyMeshData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RPolyMeshData.prototype.move = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPolyMeshData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPolyMeshData.prototype.scale = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPolyMeshData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPolyMeshData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPolyMeshData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPolyMeshData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPolyMeshData.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    
        // function 
        RPolyMeshData.prototype.updateFaceIndex = function(...args) 
          
        {
          //print("JS: RPolyMeshData.prototype.updateFaceIndex");
          return this.__PROXY__.updateFaceIndex(...args);
        };
    

      // static functions:
      

        // static function 
        RPolyMeshData.hasProxy = function() 
          
        {
          //print("JS: RPolyMeshData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyMeshData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RPolyMeshData);
  }

  
  else {
    
        print("RPolyMeshData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPolyMeshData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolyMeshData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPolyMeshData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      