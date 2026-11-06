
      // auto generated
      //var self;

      // class constructor:
      function RFileExporter() {
        

        // should be RFileExporter_BaseJs.call(this, engine):
        //RFileExporter.prototype = new RFileExporter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileExporter.getIdStatic()))) {

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
            qWarning("RFileExporter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RFileExporter.js: No constructor found for class RFileExporter");
            
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

      //RFileExporter.prototype = new RFileExporter_BaseJs(engine);
      //RFileExporter.prototype = new RFileExporter_Wrapper(engine);
      RFileExporter.prototype = new Object();


      RFileExporter.prototype.toString = function() {
          //return "RFileExporter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileExporter [JS]";
        };
      RFileExporter.getObjectType = function() {
        return RJSType_RFileExporter.getIdStatic();
      };

      RFileExporter.prototype.getObjectType = function() {
        return RJSType_RFileExporter.getIdStatic();
      };

      RFileExporter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileExporter.getIdStatic()) {
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
        RFileExporter.prototype.init = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getErrorMessage = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getErrorMessage");
          
              return this.__PROXY__.getErrorMessage(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setLayerSource = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setLayerSource");
          
              return this.__PROXY__.setLayerSource(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setBlockSource = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setBlockSource");
          
              return this.__PROXY__.setBlockSource(...args);
            
        };
        
      // function 
      RFileExporter.prototype.getDocument = function() 
        
      {
        //print("JS: RFileExporter.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.__PROXY__.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.setProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setProjectionRenderingHint");
          
              return this.__PROXY__.setProjectionRenderingHint(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getProjectionRenderingHint");
          
              return this.__PROXY__.getProjectionRenderingHint(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setClipping = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getClipping = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getClipping");
          
              return this.__PROXY__.getClipping(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setPen = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setPen");
          
              return this.__PROXY__.setPen(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getPen = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getPen");
          
              return this.__PROXY__.getPen(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setBrush = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setBrush");
          
              return this.__PROXY__.setBrush(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getBrush = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getBrush");
          
              return this.__PROXY__.getBrush(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getColor = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setEntityAttributes = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setEntityAttributes");
          
              return this.__PROXY__.setEntityAttributes(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setStyle = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setStyle");
          
              return this.__PROXY__.setStyle(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setBrushStyle = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setBrushStyle");
          
              return this.__PROXY__.setBrushStyle(...args);
            
        };
        
      // function 
      RFileExporter.prototype.setColor = function() 
        
      {
        //print("JS: RFileExporter.prototype.setColor");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.setColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.setLineweight = function() 
        
      {
        //print("JS: RFileExporter.prototype.setLineweight");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setLineweight(
                // call highest level JS implementation:
                //return this.setLineweightBase(
                
                    return this.__PROXY__.setLineweightSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.setLineweight(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setLinetypeId");
          
              return this.__PROXY__.setLinetypeId(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setLinetypePattern");
          
              return this.__PROXY__.setLinetypePattern(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getLinetypePattern");
          
              return this.__PROXY__.getLinetypePattern(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getBlockRefOrEntity = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getBlockRefOrEntity");
          
              return this.__PROXY__.getBlockRefOrEntity(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getBlockRefOrEntityId = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getBlockRefOrEntityId");
          
              return this.__PROXY__.getBlockRefOrEntityId(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getEntity = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getEntity");
          
              return this.__PROXY__.getEntity(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getCurrentBlockRef = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getCurrentBlockRef");
          
              return this.__PROXY__.getCurrentBlockRef(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getCurrentViewport = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getCurrentViewport");
          
              return this.__PROXY__.getCurrentViewport(...args);
            
        };
        
        // function 
        RFileExporter.prototype.isEntitySelected = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.isEntitySelected");
          
              return this.__PROXY__.isEntitySelected(...args);
            
        };
        
        // function 
        RFileExporter.prototype.isPatternContinuous = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.isPatternContinuous");
          
              return this.__PROXY__.isPatternContinuous(...args);
            
        };
        
      // function 
      RFileExporter.prototype.startExport = function() 
        
      {
        //print("JS: RFileExporter.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.__PROXY__.startExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.startExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.endExport = function() 
        
      {
        //print("JS: RFileExporter.prototype.endExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endExport(
                // call highest level JS implementation:
                //return this.endExportBase(
                
                    return this.__PROXY__.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportDocument = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportDocument");
          
              return this.__PROXY__.exportDocument(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportDocumentSettings = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportDocumentSettings");
          
              return this.__PROXY__.exportDocumentSettings(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportDocumentSetting = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportDocumentSetting");
          
              return this.__PROXY__.exportDocumentSetting(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportLayers = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportLayers");
          
              return this.__PROXY__.exportLayers(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportLayerStates = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportLayerStates");
          
              return this.__PROXY__.exportLayerStates(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportBlocks = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportBlocks");
          
              return this.__PROXY__.exportBlocks(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportViews = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportViews");
          
              return this.__PROXY__.exportViews(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportLinetypes");
          
              return this.__PROXY__.exportLinetypes(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportLayer = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportLayer");
          
              return this.__PROXY__.exportLayer(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportLayerState = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportLayerState");
          
              return this.__PROXY__.exportLayerState(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportBlock = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportBlock");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportBlock(
                // call highest level JS implementation:
                //return this.exportBlockBase(
                
                    return this.__PROXY__.exportBlockSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportBlock(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportView = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportView");
          
              return this.__PROXY__.exportView(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportLinetype = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportLinetype");
          
              return this.__PROXY__.exportLinetype(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportEntities = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportEntities");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportEntities(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportEntity");
          
              return this.__PROXY__.exportEntity(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getEntityLayer = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getEntityLayer");
          
              return this.__PROXY__.getEntityLayer(...args);
            
        };
        
        // function 
        RFileExporter.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RFileExporter.prototype.startEntity = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.startEntity");
          
              return this.__PROXY__.startEntity(...args);
            
        };
        
      // function 
      RFileExporter.prototype.endEntity = function() 
        
      {
        //print("JS: RFileExporter.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.__PROXY__.endEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.endEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportCurrentEntity = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportCurrentEntity");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportCurrentEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.unexportEntity = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.unexportEntity");
          
              return this.__PROXY__.unexportEntity(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportShapes = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportShapes");
          
              return this.__PROXY__.exportShapes(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportShape = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.__PROXY__.exportShapeSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportShapeSegment = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportShapeSegment");
          
              return this.__PROXY__.exportShapeSegment(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportLine = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportLine");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportLinetypeShape = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportLinetypeShape");
          
              return this.__PROXY__.exportLinetypeShape(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportLineSegment = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportLineSegment");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportLineSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportXLine = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportXLine");
          
              return this.__PROXY__.exportXLine(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportRay = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportRay");
          
              return this.__PROXY__.exportRay(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportPoint = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportPoint");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPoint(
                // call highest level JS implementation:
                //return this.exportPointBase(
                
                    return this.__PROXY__.exportPointSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportPoint(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportCircle = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportCircle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCircle(
                // call highest level JS implementation:
                //return this.exportCircleBase(
                
                    return this.__PROXY__.exportCircleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportCircle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportArc = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportArc");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportArcSegment = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportArcSegment");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportArcSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportEllipse = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportEllipse");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportPolyline = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportPolyline");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportPolyline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportSpline = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportSpline");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportSpline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportSplineSegment = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportSplineSegment");
          
              return this.__PROXY__.exportSplineSegment(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportExplodable = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportExplodable");
          
              return this.__PROXY__.exportExplodable(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportPainterPaths = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportPainterPaths");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportPainterPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportBoundingBoxPaths = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportBoundingBoxPaths");
          
              return this.__PROXY__.exportBoundingBoxPaths(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportImage = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportImage");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportText = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportText");
        
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
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportClipRectangle = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportClipRectangle");
          
              return this.__PROXY__.exportClipRectangle(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportTransform = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportTransform");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                
                    return this.__PROXY__.exportTransformSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.exportEndTransform = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportEndTransform");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportEndTransform(
                // call highest level JS implementation:
                //return this.exportEndTransformBase(
                
                    return this.__PROXY__.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportThickPolyline = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportThickPolyline");
          
              return this.__PROXY__.exportThickPolyline(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportQuad = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportQuad");
          
              return this.__PROXY__.exportQuad(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportVerticalQuad = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportVerticalQuad");
          
              return this.__PROXY__.exportVerticalQuad(...args);
            
        };
        
        // function 
        RFileExporter.prototype.exportBox = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportBox");
          
              return this.__PROXY__.exportBox(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportTriangle = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportTriangle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTriangle(
                // call highest level JS implementation:
                //return this.exportTriangleBase(
                
                    return this.__PROXY__.exportTriangleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportTriangle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.exportRectangle = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.exportRectangle");
          
              return this.__PROXY__.exportRectangle(...args);
            
        };
        
      // function 
      RFileExporter.prototype.getLineTypePatternScale = function() 
        
      {
        //print("JS: RFileExporter.prototype.getLineTypePatternScale");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getLineTypePatternScale(
                // call highest level JS implementation:
                //return this.getLineTypePatternScaleBase(
                
                    return this.__PROXY__.getLineTypePatternScaleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.getLineTypePatternScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporter.prototype.isTextRenderedAsText = function() 
        
      {
        //print("JS: RFileExporter.prototype.isTextRenderedAsText");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isTextRenderedAsText(
                // call highest level JS implementation:
                //return this.isTextRenderedAsTextBase(
                
                    return this.__PROXY__.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporter.prototype.pushEntity = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.pushEntity");
          
              return this.__PROXY__.pushEntity(...args);
            
        };
        
        // function 
        RFileExporter.prototype.popEntity = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.popEntity");
          
              return this.__PROXY__.popEntity(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setDraftMode = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setDraftMode");
          
              return this.__PROXY__.setDraftMode(...args);
            
        };
        
        // function 
        RFileExporter.prototype.toggleDraftMode = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.toggleDraftMode");
          
              return this.__PROXY__.toggleDraftMode(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getDraftMode = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getDraftMode");
          
              return this.__PROXY__.getDraftMode(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setTwoColorSelectedMode");
          
              return this.__PROXY__.setTwoColorSelectedMode(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getTwoColorSelectedMode");
          
              return this.__PROXY__.getTwoColorSelectedMode(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setScreenBasedLinetypes");
          
              return this.__PROXY__.setScreenBasedLinetypes(...args);
            
        };
        
        // function 
        RFileExporter.prototype.toggleScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.toggleScreenBasedLinetypes");
          
              return this.__PROXY__.toggleScreenBasedLinetypes(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getScreenBasedLinetypes");
          
              return this.__PROXY__.getScreenBasedLinetypes(...args);
            
        };
        
        // function 
        RFileExporter.prototype.isVisualExporter = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.isVisualExporter");
          
              return this.__PROXY__.isVisualExporter(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setVisualExporter = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setVisualExporter");
          
              return this.__PROXY__.setVisualExporter(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getExportInvisible = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getExportInvisible");
          
              return this.__PROXY__.getExportInvisible(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setExportInvisible = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setExportInvisible");
          
              return this.__PROXY__.setExportInvisible(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getPixelSizeHint = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getPixelSizeHint");
          
              return this.__PROXY__.getPixelSizeHint(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getCurrentPixelSizeHint = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getCurrentPixelSizeHint");
          
              return this.__PROXY__.getCurrentPixelSizeHint(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setPixelSizeHint = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setPixelSizeHint");
          
              return this.__PROXY__.setPixelSizeHint(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getPixelUnit = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getPixelUnit");
          
              return this.__PROXY__.getPixelUnit(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setPixelUnit");
          
              return this.__PROXY__.setPixelUnit(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getPixelWidth");
          
              return this.__PROXY__.getPixelWidth(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setPixelWidth = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setPixelWidth");
          
              return this.__PROXY__.setPixelWidth(...args);
            
        };
        
        // function 
        RFileExporter.prototype.setEnablePatterns = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.setEnablePatterns");
          
              return this.__PROXY__.setEnablePatterns(...args);
            
        };
        
        // function 
        RFileExporter.prototype.getCorrectedFileName = function(...args) 
          
        {
          //print("JS: RFileExporter.prototype.getCorrectedFileName");
          
              return this.__PROXY__.getCorrectedFileName(...args);
            
        };
        
      // function 
      RFileExporter.prototype.exportFile = function() 
        
      {
        //print("JS: RFileExporter.prototype.exportFile");
        
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportFile(
                // call highest level JS implementation:
                //return this.exportFileBase(
                
                    return this.__PROXY__.exportFileSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      RFileExporter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFileExporter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFileExporter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileExporter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileExporter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFileExporter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      