
      // auto generated
      //var self;

      // class constructor:
      function RExporter() {
        

        // should be RExporter_BaseJs.call(this, engine):
        //RExporter.prototype = new RExporter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RExporter.getIdStatic()))) {

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
            qWarning("RExporter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RExporter.js: No constructor found for class RExporter");
            
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

      //RExporter.prototype = new RExporter_BaseJs(engine);
      //RExporter.prototype = new RExporter_Wrapper(engine);
      RExporter.prototype = new Object();


      RExporter.prototype.toString = function() {
          //return "RExporter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RExporter [JS]";
        };
      RExporter.getObjectType = function() {
        return RJSType_RExporter.getIdStatic();
      };

      RExporter.prototype.getObjectType = function() {
        return RJSType_RExporter.getIdStatic();
      };

      RExporter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RExporter.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RExporter.prototype.init = function(...args) 
          
        {
          //print("JS: RExporter.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RExporter.prototype.getErrorMessage = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getErrorMessage");
          
              return this.__PROXY__.getErrorMessage(...args);
            
        };
    
        // function 
        RExporter.prototype.setLayerSource = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setLayerSource");
          
              return this.__PROXY__.setLayerSource(...args);
            
        };
    
        // function 
        RExporter.prototype.setBlockSource = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setBlockSource");
          
              return this.__PROXY__.setBlockSource(...args);
            
        };
    
      // function 
      RExporter.prototype.getDocument = function() 
        
      {
        //print("JS: RExporter.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.__PROXY__.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.setProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setProjectionRenderingHint");
          
              return this.__PROXY__.setProjectionRenderingHint(...args);
            
        };
    
        // function 
        RExporter.prototype.getProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getProjectionRenderingHint");
          
              return this.__PROXY__.getProjectionRenderingHint(...args);
            
        };
    
        // function 
        RExporter.prototype.setClipping = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
    
        // function 
        RExporter.prototype.getClipping = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getClipping");
          
              return this.__PROXY__.getClipping(...args);
            
        };
    
        // function 
        RExporter.prototype.setPen = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setPen");
          
              return this.__PROXY__.setPen(...args);
            
        };
    
        // function 
        RExporter.prototype.getPen = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getPen");
          
              return this.__PROXY__.getPen(...args);
            
        };
    
        // function 
        RExporter.prototype.setBrush = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setBrush");
          
              return this.__PROXY__.setBrush(...args);
            
        };
    
        // function 
        RExporter.prototype.getBrush = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getBrush");
          
              return this.__PROXY__.getBrush(...args);
            
        };
    
        // function 
        RExporter.prototype.getColor = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
    
        // function 
        RExporter.prototype.setEntityAttributes = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setEntityAttributes");
          
              return this.__PROXY__.setEntityAttributes(...args);
            
        };
    
        // function 
        RExporter.prototype.setStyle = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setStyle");
          
              return this.__PROXY__.setStyle(...args);
            
        };
    
        // function 
        RExporter.prototype.setBrushStyle = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setBrushStyle");
          
              return this.__PROXY__.setBrushStyle(...args);
            
        };
    
      // function 
      RExporter.prototype.setColor = function() 
        
      {
        //print("JS: RExporter.prototype.setColor");
        
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
              

        //copyProperties(this, wrapper, RExporter);
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.setColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.setLineweight = function() 
        
      {
        //print("JS: RExporter.prototype.setLineweight");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setLineweight(
                // call highest level JS implementation:
                //return this.setLineweightBase(
                
                    return this.__PROXY__.setLineweightSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.setLineweight(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setLinetypeId");
          
              return this.__PROXY__.setLinetypeId(...args);
            
        };
    
        // function 
        RExporter.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setLinetypePattern");
          
              return this.__PROXY__.setLinetypePattern(...args);
            
        };
    
        // function 
        RExporter.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getLinetypePattern");
          
              return this.__PROXY__.getLinetypePattern(...args);
            
        };
    
        // function 
        RExporter.prototype.getBlockRefOrEntity = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getBlockRefOrEntity");
          
              return this.__PROXY__.getBlockRefOrEntity(...args);
            
        };
    
        // function 
        RExporter.prototype.getBlockRefOrEntityId = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getBlockRefOrEntityId");
          
              return this.__PROXY__.getBlockRefOrEntityId(...args);
            
        };
    
        // function 
        RExporter.prototype.getEntity = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getEntity");
          
              return this.__PROXY__.getEntity(...args);
            
        };
    
        // function 
        RExporter.prototype.getCurrentBlockRef = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getCurrentBlockRef");
          
              return this.__PROXY__.getCurrentBlockRef(...args);
            
        };
    
        // function 
        RExporter.prototype.getCurrentViewport = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getCurrentViewport");
          
              return this.__PROXY__.getCurrentViewport(...args);
            
        };
    
        // function 
        RExporter.prototype.isEntitySelected = function(...args) 
          
        {
          //print("JS: RExporter.prototype.isEntitySelected");
          
              return this.__PROXY__.isEntitySelected(...args);
            
        };
    
        // function 
        RExporter.prototype.isPatternContinuous = function(...args) 
          
        {
          //print("JS: RExporter.prototype.isPatternContinuous");
          
              return this.__PROXY__.isPatternContinuous(...args);
            
        };
    
      // function 
      RExporter.prototype.startExport = function() 
        
      {
        //print("JS: RExporter.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.__PROXY__.startExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.startExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.endExport = function() 
        
      {
        //print("JS: RExporter.prototype.endExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endExport(
                // call highest level JS implementation:
                //return this.endExportBase(
                
                    return this.__PROXY__.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportDocument = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportDocument");
          
              return this.__PROXY__.exportDocument(...args);
            
        };
    
        // function 
        RExporter.prototype.exportDocumentSettings = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportDocumentSettings");
          
              return this.__PROXY__.exportDocumentSettings(...args);
            
        };
    
        // function 
        RExporter.prototype.exportDocumentSetting = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportDocumentSetting");
          
              return this.__PROXY__.exportDocumentSetting(...args);
            
        };
    
        // function 
        RExporter.prototype.exportLayers = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportLayers");
          
              return this.__PROXY__.exportLayers(...args);
            
        };
    
        // function 
        RExporter.prototype.exportLayerStates = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportLayerStates");
          
              return this.__PROXY__.exportLayerStates(...args);
            
        };
    
        // function 
        RExporter.prototype.exportBlocks = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportBlocks");
          
              return this.__PROXY__.exportBlocks(...args);
            
        };
    
        // function 
        RExporter.prototype.exportViews = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportViews");
          
              return this.__PROXY__.exportViews(...args);
            
        };
    
        // function 
        RExporter.prototype.exportLinetypes = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportLinetypes");
          
              return this.__PROXY__.exportLinetypes(...args);
            
        };
    
        // function 
        RExporter.prototype.exportLayer = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportLayer");
          
              return this.__PROXY__.exportLayer(...args);
            
        };
    
        // function 
        RExporter.prototype.exportLayerState = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportLayerState");
          
              return this.__PROXY__.exportLayerState(...args);
            
        };
    
      // function 
      RExporter.prototype.exportBlock = function() 
        
      {
        //print("JS: RExporter.prototype.exportBlock");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportBlock(
                // call highest level JS implementation:
                //return this.exportBlockBase(
                
                    return this.__PROXY__.exportBlockSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportBlock(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportView = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportView");
          
              return this.__PROXY__.exportView(...args);
            
        };
    
        // function 
        RExporter.prototype.exportLinetype = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportLinetype");
          
              return this.__PROXY__.exportLinetype(...args);
            
        };
    
      // function 
      RExporter.prototype.exportEntities = function() 
        
      {
        //print("JS: RExporter.prototype.exportEntities");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportEntities(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportEntity");
          
              return this.__PROXY__.exportEntity(...args);
            
        };
    
        // function 
        RExporter.prototype.getEntityLayer = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getEntityLayer");
          
              return this.__PROXY__.getEntityLayer(...args);
            
        };
    
        // function 
        RExporter.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RExporter.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RExporter.prototype.startEntity = function(...args) 
          
        {
          //print("JS: RExporter.prototype.startEntity");
          
              return this.__PROXY__.startEntity(...args);
            
        };
    
      // function 
      RExporter.prototype.endEntity = function() 
        
      {
        //print("JS: RExporter.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.__PROXY__.endEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.endEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportCurrentEntity = function() 
        
      {
        //print("JS: RExporter.prototype.exportCurrentEntity");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportCurrentEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.unexportEntity = function(...args) 
          
        {
          //print("JS: RExporter.prototype.unexportEntity");
          
              return this.__PROXY__.unexportEntity(...args);
            
        };
    
        // function 
        RExporter.prototype.exportShapes = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportShapes");
          
              return this.__PROXY__.exportShapes(...args);
            
        };
    
      // function 
      RExporter.prototype.exportShape = function() 
        
      {
        //print("JS: RExporter.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.__PROXY__.exportShapeSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportShapeSegment = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportShapeSegment");
          
              return this.__PROXY__.exportShapeSegment(...args);
            
        };
    
      // function 
      RExporter.prototype.exportLine = function() 
        
      {
        //print("JS: RExporter.prototype.exportLine");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportLinetypeShape = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportLinetypeShape");
          
              return this.__PROXY__.exportLinetypeShape(...args);
            
        };
    
      // function 
      RExporter.prototype.exportLineSegment = function() 
        
      {
        //print("JS: RExporter.prototype.exportLineSegment");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportLineSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportXLine = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportXLine");
          
              return this.__PROXY__.exportXLine(...args);
            
        };
    
        // function 
        RExporter.prototype.exportRay = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportRay");
          
              return this.__PROXY__.exportRay(...args);
            
        };
    
      // function 
      RExporter.prototype.exportPoint = function() 
        
      {
        //print("JS: RExporter.prototype.exportPoint");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPoint(
                // call highest level JS implementation:
                //return this.exportPointBase(
                
                    return this.__PROXY__.exportPointSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportPoint(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportCircle = function() 
        
      {
        //print("JS: RExporter.prototype.exportCircle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCircle(
                // call highest level JS implementation:
                //return this.exportCircleBase(
                
                    return this.__PROXY__.exportCircleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportCircle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportArc = function() 
        
      {
        //print("JS: RExporter.prototype.exportArc");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportArcSegment = function() 
        
      {
        //print("JS: RExporter.prototype.exportArcSegment");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportArcSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportEllipse = function() 
        
      {
        //print("JS: RExporter.prototype.exportEllipse");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportPolyline = function() 
        
      {
        //print("JS: RExporter.prototype.exportPolyline");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportPolyline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportSpline = function() 
        
      {
        //print("JS: RExporter.prototype.exportSpline");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportSpline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportSplineSegment = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportSplineSegment");
          
              return this.__PROXY__.exportSplineSegment(...args);
            
        };
    
        // function 
        RExporter.prototype.exportExplodable = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportExplodable");
          
              return this.__PROXY__.exportExplodable(...args);
            
        };
    
      // function 
      RExporter.prototype.exportPainterPaths = function() 
        
      {
        //print("JS: RExporter.prototype.exportPainterPaths");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportPainterPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportBoundingBoxPaths = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportBoundingBoxPaths");
          
              return this.__PROXY__.exportBoundingBoxPaths(...args);
            
        };
    
      // function 
      RExporter.prototype.exportImage = function() 
        
      {
        //print("JS: RExporter.prototype.exportImage");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportText = function() 
        
      {
        //print("JS: RExporter.prototype.exportText");
        
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
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportClipRectangle = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportClipRectangle");
          
              return this.__PROXY__.exportClipRectangle(...args);
            
        };
    
      // function 
      RExporter.prototype.exportTransform = function() 
        
      {
        //print("JS: RExporter.prototype.exportTransform");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                
                    return this.__PROXY__.exportTransformSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.exportEndTransform = function() 
        
      {
        //print("JS: RExporter.prototype.exportEndTransform");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportEndTransform(
                // call highest level JS implementation:
                //return this.exportEndTransformBase(
                
                    return this.__PROXY__.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportThickPolyline = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportThickPolyline");
          
              return this.__PROXY__.exportThickPolyline(...args);
            
        };
    
        // function 
        RExporter.prototype.exportQuad = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportQuad");
          
              return this.__PROXY__.exportQuad(...args);
            
        };
    
        // function 
        RExporter.prototype.exportVerticalQuad = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportVerticalQuad");
          
              return this.__PROXY__.exportVerticalQuad(...args);
            
        };
    
        // function 
        RExporter.prototype.exportBox = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportBox");
          
              return this.__PROXY__.exportBox(...args);
            
        };
    
      // function 
      RExporter.prototype.exportTriangle = function() 
        
      {
        //print("JS: RExporter.prototype.exportTriangle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTriangle(
                // call highest level JS implementation:
                //return this.exportTriangleBase(
                
                    return this.__PROXY__.exportTriangleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportTriangle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.exportRectangle = function(...args) 
          
        {
          //print("JS: RExporter.prototype.exportRectangle");
          
              return this.__PROXY__.exportRectangle(...args);
            
        };
    
      // function 
      RExporter.prototype.getLineTypePatternScale = function() 
        
      {
        //print("JS: RExporter.prototype.getLineTypePatternScale");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getLineTypePatternScale(
                // call highest level JS implementation:
                //return this.getLineTypePatternScaleBase(
                
                    return this.__PROXY__.getLineTypePatternScaleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.getLineTypePatternScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RExporter.prototype.isTextRenderedAsText = function() 
        
      {
        //print("JS: RExporter.prototype.isTextRenderedAsText");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isTextRenderedAsText(
                // call highest level JS implementation:
                //return this.isTextRenderedAsTextBase(
                
                    return this.__PROXY__.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RExporter.prototype.pushEntity = function(...args) 
          
        {
          //print("JS: RExporter.prototype.pushEntity");
          
              return this.__PROXY__.pushEntity(...args);
            
        };
    
        // function 
        RExporter.prototype.popEntity = function(...args) 
          
        {
          //print("JS: RExporter.prototype.popEntity");
          
              return this.__PROXY__.popEntity(...args);
            
        };
    
        // function 
        RExporter.prototype.setDraftMode = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setDraftMode");
          
              return this.__PROXY__.setDraftMode(...args);
            
        };
    
        // function 
        RExporter.prototype.toggleDraftMode = function(...args) 
          
        {
          //print("JS: RExporter.prototype.toggleDraftMode");
          
              return this.__PROXY__.toggleDraftMode(...args);
            
        };
    
        // function 
        RExporter.prototype.getDraftMode = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getDraftMode");
          
              return this.__PROXY__.getDraftMode(...args);
            
        };
    
        // function 
        RExporter.prototype.setTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setTwoColorSelectedMode");
          
              return this.__PROXY__.setTwoColorSelectedMode(...args);
            
        };
    
        // function 
        RExporter.prototype.getTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getTwoColorSelectedMode");
          
              return this.__PROXY__.getTwoColorSelectedMode(...args);
            
        };
    
        // function 
        RExporter.prototype.setScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setScreenBasedLinetypes");
          
              return this.__PROXY__.setScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RExporter.prototype.toggleScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RExporter.prototype.toggleScreenBasedLinetypes");
          
              return this.__PROXY__.toggleScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RExporter.prototype.getScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getScreenBasedLinetypes");
          
              return this.__PROXY__.getScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RExporter.prototype.isVisualExporter = function(...args) 
          
        {
          //print("JS: RExporter.prototype.isVisualExporter");
          
              return this.__PROXY__.isVisualExporter(...args);
            
        };
    
        // function 
        RExporter.prototype.setVisualExporter = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setVisualExporter");
          
              return this.__PROXY__.setVisualExporter(...args);
            
        };
    
        // function 
        RExporter.prototype.getExportInvisible = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getExportInvisible");
          
              return this.__PROXY__.getExportInvisible(...args);
            
        };
    
        // function 
        RExporter.prototype.setExportInvisible = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setExportInvisible");
          
              return this.__PROXY__.setExportInvisible(...args);
            
        };
    
        // function 
        RExporter.prototype.getPixelSizeHint = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getPixelSizeHint");
          
              return this.__PROXY__.getPixelSizeHint(...args);
            
        };
    
        // function 
        RExporter.prototype.getCurrentPixelSizeHint = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getCurrentPixelSizeHint");
          
              return this.__PROXY__.getCurrentPixelSizeHint(...args);
            
        };
    
        // function 
        RExporter.prototype.setPixelSizeHint = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setPixelSizeHint");
          
              return this.__PROXY__.setPixelSizeHint(...args);
            
        };
    
        // function 
        RExporter.prototype.getPixelUnit = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getPixelUnit");
          
              return this.__PROXY__.getPixelUnit(...args);
            
        };
    
        // function 
        RExporter.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setPixelUnit");
          
              return this.__PROXY__.setPixelUnit(...args);
            
        };
    
        // function 
        RExporter.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RExporter.prototype.getPixelWidth");
          
              return this.__PROXY__.getPixelWidth(...args);
            
        };
    
        // function 
        RExporter.prototype.setPixelWidth = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setPixelWidth");
          
              return this.__PROXY__.setPixelWidth(...args);
            
        };
    
        // function 
        RExporter.prototype.setEnablePatterns = function(...args) 
          
        {
          //print("JS: RExporter.prototype.setEnablePatterns");
          
              return this.__PROXY__.setEnablePatterns(...args);
            
        };
    

      // static functions:
      RExporter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RExporter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RExporter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RExporter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RExporter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RExporter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      