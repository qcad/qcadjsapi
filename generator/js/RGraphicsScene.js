
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsScene() {
        

        // should be RGraphicsScene_BaseJs.call(this, engine):
        //RGraphicsScene.prototype = new RGraphicsScene_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsScene.getIdStatic()))) {

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
            qWarning("RGraphicsScene.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RGraphicsScene.js: No constructor found for class RGraphicsScene");
            
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

      //RGraphicsScene.prototype = new RGraphicsScene_BaseJs(engine);
      //RGraphicsScene.prototype = new RGraphicsScene_Wrapper(engine);
      RGraphicsScene.prototype = new Object();


      RGraphicsScene.prototype.toString = function() {
          //return "RGraphicsScene [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsScene [JS]";
        };
      RGraphicsScene.getObjectType = function() {
        return RJSType_RGraphicsScene.getIdStatic();
      };

      RGraphicsScene.prototype.getObjectType = function() {
        return RJSType_RGraphicsScene.getIdStatic();
      };

      RGraphicsScene.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsScene.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RExporter.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RGraphicsScene.prototype.init = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getErrorMessage = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getErrorMessage");
          
              return this.__PROXY__.getErrorMessage(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setLayerSource = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setLayerSource");
          
              return this.__PROXY__.setLayerSource(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setBlockSource = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setBlockSource");
          
              return this.__PROXY__.setBlockSource(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.getDocument = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.__PROXY__.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.setProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setProjectionRenderingHint");
          
              return this.__PROXY__.setProjectionRenderingHint(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getProjectionRenderingHint");
          
              return this.__PROXY__.getProjectionRenderingHint(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setClipping = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getClipping = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getClipping");
          
              return this.__PROXY__.getClipping(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setPen = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setPen");
          
              return this.__PROXY__.setPen(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getPen = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getPen");
          
              return this.__PROXY__.getPen(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setBrush = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setBrush");
          
              return this.__PROXY__.setBrush(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getBrush = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getBrush");
          
              return this.__PROXY__.getBrush(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getColor = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setEntityAttributes = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setEntityAttributes");
          
              return this.__PROXY__.setEntityAttributes(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setStyle = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setStyle");
          
              return this.__PROXY__.setStyle(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setBrushStyle = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setBrushStyle");
          
              return this.__PROXY__.setBrushStyle(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.setColor = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.setColor");
        
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setColor(
                // call highest level JS implementation:
                //return this.setColorBase(
                
                    return this.__PROXY__.setColorSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setColor(
                // call highest level JS implementation:
                //return this.setColorBase(
                
                    return this.__PROXY__.setColorSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.setColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.setLineweight = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.setLineweight");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setLineweight(
                // call highest level JS implementation:
                //return this.setLineweightBase(
                
                    return this.__PROXY__.setLineweightSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.setLineweight(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setLinetypeId");
          
              return this.__PROXY__.setLinetypeId(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setLinetypePattern");
          
              return this.__PROXY__.setLinetypePattern(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getLinetypePattern");
          
              return this.__PROXY__.getLinetypePattern(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getBlockRefOrEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getBlockRefOrEntity");
          
              return this.__PROXY__.getBlockRefOrEntity(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getBlockRefOrEntityId = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getBlockRefOrEntityId");
          
              return this.__PROXY__.getBlockRefOrEntityId(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getEntity");
          
              return this.__PROXY__.getEntity(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getCurrentBlockRef = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getCurrentBlockRef");
          
              return this.__PROXY__.getCurrentBlockRef(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getCurrentViewport = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getCurrentViewport");
          
              return this.__PROXY__.getCurrentViewport(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.isEntitySelected = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.isEntitySelected");
          
              return this.__PROXY__.isEntitySelected(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.isPatternContinuous = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.isPatternContinuous");
          
              return this.__PROXY__.isPatternContinuous(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.startExport = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.__PROXY__.startExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.startExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.endExport = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.endExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endExport(
                // call highest level JS implementation:
                //return this.endExportBase(
                
                    return this.__PROXY__.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportDocument = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportDocument");
          
              return this.__PROXY__.exportDocument(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportDocumentSetting = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportDocumentSetting");
          
              return this.__PROXY__.exportDocumentSetting(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportLayers = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportLayers");
          
              return this.__PROXY__.exportLayers(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportLayerStates = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportLayerStates");
          
              return this.__PROXY__.exportLayerStates(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportBlocks = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportBlocks");
          
              return this.__PROXY__.exportBlocks(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportViews = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportViews");
          
              return this.__PROXY__.exportViews(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportLinetypes");
          
              return this.__PROXY__.exportLinetypes(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportLayer = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportLayer");
          
              return this.__PROXY__.exportLayer(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportLayerState = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportLayerState");
          
              return this.__PROXY__.exportLayerState(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportBlock = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportBlock");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportBlock(
                // call highest level JS implementation:
                //return this.exportBlockBase(
                
                    return this.__PROXY__.exportBlockSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportBlock(
                // call highest level JS implementation:
                //return this.exportBlockBase(
                
                    return this.__PROXY__.exportBlockSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportBlock(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportView = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportView");
          
              return this.__PROXY__.exportView(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportLinetype = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportLinetype");
          
              return this.__PROXY__.exportLinetype(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportEntities = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportEntities");
        
      if (arguments.length >= 0 &&
          arguments.length <= 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportEntities(
                // call highest level JS implementation:
                //return this.exportEntitiesBase(
                
                    return this.__PROXY__.exportEntitiesSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportEntities(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportEntity");
          
              return this.__PROXY__.exportEntity(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getEntityLayer = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getEntityLayer");
          
              return this.__PROXY__.getEntityLayer(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.startEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.startEntity");
          
              return this.__PROXY__.startEntity(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.endEntity = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.__PROXY__.endEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.endEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportShapes = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportShapes");
          
              return this.__PROXY__.exportShapes(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportShape = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.__PROXY__.exportShapeSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportShapeSegment = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportShapeSegment");
          
              return this.__PROXY__.exportShapeSegment(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportLine = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportLine");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportLine(
                // call highest level JS implementation:
                //return this.exportLineBase(
                
                    return this.__PROXY__.exportLineSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportLinetypeShape = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportLinetypeShape");
          
              return this.__PROXY__.exportLinetypeShape(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportLineSegment = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportLineSegment");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportLineSegment(
                // call highest level JS implementation:
                //return this.exportLineSegmentBase(
                
                    return this.__PROXY__.exportLineSegmentSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportLineSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportXLine = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportXLine");
          
              return this.__PROXY__.exportXLine(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportRay = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportRay");
          
              return this.__PROXY__.exportRay(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportPoint = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportPoint");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPoint(
                // call highest level JS implementation:
                //return this.exportPointBase(
                
                    return this.__PROXY__.exportPointSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportPoint(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportCircle = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportCircle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCircle(
                // call highest level JS implementation:
                //return this.exportCircleBase(
                
                    return this.__PROXY__.exportCircleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportCircle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportArc = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportArc");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportArc(
                // call highest level JS implementation:
                //return this.exportArcBase(
                
                    return this.__PROXY__.exportArcSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportArcSegment = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportArcSegment");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportArcSegment(
                // call highest level JS implementation:
                //return this.exportArcSegmentBase(
                
                    return this.__PROXY__.exportArcSegmentSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportArcSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportEllipse = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportEllipse");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportEllipse(
                // call highest level JS implementation:
                //return this.exportEllipseBase(
                
                    return this.__PROXY__.exportEllipseSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportPolyline = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportPolyline");
        
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPolyline(
                // call highest level JS implementation:
                //return this.exportPolylineBase(
                
                    return this.__PROXY__.exportPolylineSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportPolyline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportSpline = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportSpline");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportSpline(
                // call highest level JS implementation:
                //return this.exportSplineBase(
                
                    return this.__PROXY__.exportSplineSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportSpline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportSplineSegment = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportSplineSegment");
          
              return this.__PROXY__.exportSplineSegment(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportExplodable = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportExplodable");
          
              return this.__PROXY__.exportExplodable(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportPainterPaths = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportPainterPaths");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPainterPaths(
                // call highest level JS implementation:
                //return this.exportPainterPathsBase(
                
                    return this.__PROXY__.exportPainterPathsSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportPainterPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportBoundingBoxPaths = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportBoundingBoxPaths");
          
              return this.__PROXY__.exportBoundingBoxPaths(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportImage = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportImage");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportImage(
                // call highest level JS implementation:
                //return this.exportImageBase(
                
                    return this.__PROXY__.exportImageSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportText = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportText");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportText(
                // call highest level JS implementation:
                //return this.exportTextBase(
                
                    return this.__PROXY__.exportTextSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportClipRectangle = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportClipRectangle");
          
              return this.__PROXY__.exportClipRectangle(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportTransform = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportTransform");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                
                    return this.__PROXY__.exportTransformSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.exportEndTransform = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportEndTransform");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportEndTransform(
                // call highest level JS implementation:
                //return this.exportEndTransformBase(
                
                    return this.__PROXY__.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportThickPolyline = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportThickPolyline");
          
              return this.__PROXY__.exportThickPolyline(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportQuad = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportQuad");
          
              return this.__PROXY__.exportQuad(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportVerticalQuad = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportVerticalQuad");
          
              return this.__PROXY__.exportVerticalQuad(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportBox = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportBox");
          
              return this.__PROXY__.exportBox(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportTriangle = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportTriangle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTriangle(
                // call highest level JS implementation:
                //return this.exportTriangleBase(
                
                    return this.__PROXY__.exportTriangleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportTriangle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.exportRectangle = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportRectangle");
          
              return this.__PROXY__.exportRectangle(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.getLineTypePatternScale = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.getLineTypePatternScale");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getLineTypePatternScale(
                // call highest level JS implementation:
                //return this.getLineTypePatternScaleBase(
                
                    return this.__PROXY__.getLineTypePatternScaleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.getLineTypePatternScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsScene.prototype.isTextRenderedAsText = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.isTextRenderedAsText");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isTextRenderedAsText(
                // call highest level JS implementation:
                //return this.isTextRenderedAsTextBase(
                
                    return this.__PROXY__.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.pushEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.pushEntity");
          
              return this.__PROXY__.pushEntity(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.popEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.popEntity");
          
              return this.__PROXY__.popEntity(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setDraftMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setDraftMode");
          
              return this.__PROXY__.setDraftMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.toggleDraftMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.toggleDraftMode");
          
              return this.__PROXY__.toggleDraftMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getDraftMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getDraftMode");
          
              return this.__PROXY__.getDraftMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setTwoColorSelectedMode");
          
              return this.__PROXY__.setTwoColorSelectedMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getTwoColorSelectedMode");
          
              return this.__PROXY__.getTwoColorSelectedMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setScreenBasedLinetypes");
          
              return this.__PROXY__.setScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.toggleScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.toggleScreenBasedLinetypes");
          
              return this.__PROXY__.toggleScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getScreenBasedLinetypes");
          
              return this.__PROXY__.getScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.isVisualExporter = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.isVisualExporter");
          
              return this.__PROXY__.isVisualExporter(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setVisualExporter = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setVisualExporter");
          
              return this.__PROXY__.setVisualExporter(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getExportInvisible = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getExportInvisible");
          
              return this.__PROXY__.getExportInvisible(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setExportInvisible = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setExportInvisible");
          
              return this.__PROXY__.setExportInvisible(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getPixelSizeHint = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getPixelSizeHint");
          
              return this.__PROXY__.getPixelSizeHint(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getCurrentPixelSizeHint = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getCurrentPixelSizeHint");
          
              return this.__PROXY__.getCurrentPixelSizeHint(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setPixelSizeHint = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setPixelSizeHint");
          
              return this.__PROXY__.setPixelSizeHint(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getPixelUnit = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getPixelUnit");
          
              return this.__PROXY__.getPixelUnit(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setPixelUnit");
          
              return this.__PROXY__.setPixelUnit(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getPixelWidth");
          
              return this.__PROXY__.getPixelWidth(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setPixelWidth = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setPixelWidth");
          
              return this.__PROXY__.setPixelWidth(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setEnablePatterns = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setEnablePatterns");
          
              return this.__PROXY__.setEnablePatterns(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getDocumentInterface = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getDocumentInterface");
          
              return this.__PROXY__.getDocumentInterface(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getGraphicsViews = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getGraphicsViews");
          
              return this.__PROXY__.getGraphicsViews(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.clear = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportDocumentSettings = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportDocumentSettings");
          
              return this.__PROXY__.exportDocumentSettings(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.regenerate = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.regenerate");
          
              return this.__PROXY__.regenerate(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.updateSelectionStatus = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.updateSelectionStatus");
          
              return this.__PROXY__.updateSelectionStatus(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.regenerateViews = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.regenerateViews");
          
              return this.__PROXY__.regenerateViews(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.repaintViews = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.repaintViews");
          
              return this.__PROXY__.repaintViews(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleTerminateEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleTerminateEvent");
          
              return this.__PROXY__.handleTerminateEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleKeyPressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleKeyPressEvent");
          
              return this.__PROXY__.handleKeyPressEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleKeyReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleKeyReleaseEvent");
          
              return this.__PROXY__.handleKeyReleaseEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleMouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleMouseMoveEvent");
          
              return this.__PROXY__.handleMouseMoveEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleMousePressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleMousePressEvent");
          
              return this.__PROXY__.handleMousePressEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleMouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleMouseReleaseEvent");
          
              return this.__PROXY__.handleMouseReleaseEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleMouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleMouseDoubleClickEvent");
          
              return this.__PROXY__.handleMouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleWheelEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleWheelEvent");
          
              return this.__PROXY__.handleWheelEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleTabletEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleTabletEvent");
          
              return this.__PROXY__.handleTabletEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handleSwipeGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handleSwipeGestureEvent");
          
              return this.__PROXY__.handleSwipeGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handlePanGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handlePanGestureEvent");
          
              return this.__PROXY__.handlePanGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.handlePinchGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.handlePinchGestureEvent");
          
              return this.__PROXY__.handlePinchGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.registerView = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.registerView");
          
              return this.__PROXY__.registerView(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.unregisterView = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.unregisterView");
          
              return this.__PROXY__.unregisterView(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.beginPreview = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.beginPreview");
          
              return this.__PROXY__.beginPreview(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.endPreview = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.endPreview");
          
              return this.__PROXY__.endPreview(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.clearPreview = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.clearPreview");
          
              return this.__PROXY__.clearPreview(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.isPreviewEmpty = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.isPreviewEmpty");
          
              return this.__PROXY__.isPreviewEmpty(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.addToPreview = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.addToPreview");
          
              return this.__PROXY__.addToPreview(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.beginNoColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.beginNoColorMode");
          
              return this.__PROXY__.beginNoColorMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.endNoColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.endNoColorMode");
          
              return this.__PROXY__.endNoColorMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getNoColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getNoColorMode");
          
              return this.__PROXY__.getNoColorMode(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.getHighlightedReferencePoint = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.getHighlightedReferencePoint");
          
              return this.__PROXY__.getHighlightedReferencePoint(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.highlightEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.highlightEntity");
          
              return this.__PROXY__.highlightEntity(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.highlightReferencePoint = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.highlightReferencePoint");
          
              return this.__PROXY__.highlightReferencePoint(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.selectReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.selectReferencePoints");
          
              return this.__PROXY__.selectReferencePoints(...args);
            
        };
    
      // function 
      RGraphicsScene.prototype.exportCurrentEntity = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportCurrentEntity");
        
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCurrentEntity(
                // call highest level JS implementation:
                //return this.exportCurrentEntityBase(
                
                    return this.__PROXY__.exportCurrentEntitySuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportCurrentEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsScene.prototype.unexportEntity = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.unexportEntity");
          
              return this.__PROXY__.unexportEntity(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.countReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.countReferencePoints");
          
              return this.__PROXY__.countReferencePoints(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.hasSelectedReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.hasSelectedReferencePoints");
          
              return this.__PROXY__.hasSelectedReferencePoints(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.dump = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.dump");
          
              return this.__PROXY__.dump(...args);
            
        };
    
        // function 
        RGraphicsScene.prototype.exportReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsScene.prototype.exportReferencePoints");
          
              return this.__PROXY__.exportReferencePoints(...args);
            
        };
    

      // static functions:
      RGraphicsScene.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGraphicsScene.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGraphicsScene.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsScene.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsScene.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGraphicsScene.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      