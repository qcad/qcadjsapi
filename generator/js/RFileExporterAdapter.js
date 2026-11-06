
      // auto generated
      //var self;

      // class constructor:
      function RFileExporterAdapter() {
        

        // should be RFileExporterAdapter_BaseJs.call(this, engine):
        //RFileExporterAdapter.prototype = new RFileExporterAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileExporterAdapter.getIdStatic()))) {

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
            qWarning("RFileExporterAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RFileExporterAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFileExporterAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter(): wrong number / type of arguments");
      
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

      //RFileExporterAdapter.prototype = new RFileExporterAdapter_BaseJs(engine);
      //RFileExporterAdapter.prototype = new RFileExporterAdapter_Wrapper(engine);
      RFileExporterAdapter.prototype = new Object();


      RFileExporterAdapter.prototype.toString = function() {
          //return "RFileExporterAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileExporterAdapter [JS]";
        };
      RFileExporterAdapter.getObjectType = function() {
        return RJSType_RFileExporterAdapter.getIdStatic();
      };

      RFileExporterAdapter.prototype.getObjectType = function() {
        return RJSType_RFileExporterAdapter.getIdStatic();
      };

      RFileExporterAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileExporterAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RExporter.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RFileExporter.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RFileExporterAdapter.prototype.init = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getErrorMessage = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getErrorMessage");
          
              return this.__PROXY__.getErrorMessage(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setLayerSource = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setLayerSource");
          
              return this.__PROXY__.setLayerSource(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setBlockSource = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setBlockSource");
          
              return this.__PROXY__.setBlockSource(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.getDocument = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.__PROXY__.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.setProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setProjectionRenderingHint");
          
              return this.__PROXY__.setProjectionRenderingHint(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getProjectionRenderingHint");
          
              return this.__PROXY__.getProjectionRenderingHint(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setClipping = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getClipping = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getClipping");
          
              return this.__PROXY__.getClipping(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setPen = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setPen");
          
              return this.__PROXY__.setPen(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getPen = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getPen");
          
              return this.__PROXY__.getPen(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setBrush = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setBrush");
          
              return this.__PROXY__.setBrush(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getBrush = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getBrush");
          
              return this.__PROXY__.getBrush(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getColor = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setEntityAttributes = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setEntityAttributes");
          
              return this.__PROXY__.setEntityAttributes(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setStyle = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setStyle");
          
              return this.__PROXY__.setStyle(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setBrushStyle = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setBrushStyle");
          
              return this.__PROXY__.setBrushStyle(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.setColor = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.setColor");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.setColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.setLineweight = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.setLineweight");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setLineweight(
                // call highest level JS implementation:
                //return this.setLineweightBase(
                
                    return this.__PROXY__.setLineweightSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.setLineweight(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setLinetypeId");
          
              return this.__PROXY__.setLinetypeId(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setLinetypePattern");
          
              return this.__PROXY__.setLinetypePattern(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getLinetypePattern");
          
              return this.__PROXY__.getLinetypePattern(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getBlockRefOrEntity = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getBlockRefOrEntity");
          
              return this.__PROXY__.getBlockRefOrEntity(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getBlockRefOrEntityId = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getBlockRefOrEntityId");
          
              return this.__PROXY__.getBlockRefOrEntityId(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getEntity = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getEntity");
          
              return this.__PROXY__.getEntity(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getCurrentBlockRef = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getCurrentBlockRef");
          
              return this.__PROXY__.getCurrentBlockRef(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getCurrentViewport = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getCurrentViewport");
          
              return this.__PROXY__.getCurrentViewport(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.isEntitySelected = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.isEntitySelected");
          
              return this.__PROXY__.isEntitySelected(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.isPatternContinuous = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.isPatternContinuous");
          
              return this.__PROXY__.isPatternContinuous(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.startExport = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.__PROXY__.startExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.startExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.endExport = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.endExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endExport(
                // call highest level JS implementation:
                //return this.endExportBase(
                
                    return this.__PROXY__.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportDocument = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportDocument");
          
              return this.__PROXY__.exportDocument(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportDocumentSettings = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportDocumentSettings");
          
              return this.__PROXY__.exportDocumentSettings(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportDocumentSetting = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportDocumentSetting");
          
              return this.__PROXY__.exportDocumentSetting(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportLayers = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportLayers");
          
              return this.__PROXY__.exportLayers(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportLayerStates = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportLayerStates");
          
              return this.__PROXY__.exportLayerStates(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportBlocks = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportBlocks");
          
              return this.__PROXY__.exportBlocks(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportViews = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportViews");
          
              return this.__PROXY__.exportViews(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportLinetypes");
          
              return this.__PROXY__.exportLinetypes(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportLayer = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportLayer");
          
              return this.__PROXY__.exportLayer(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportLayerState = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportLayerState");
          
              return this.__PROXY__.exportLayerState(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportBlock = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportBlock");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportBlock(
                // call highest level JS implementation:
                //return this.exportBlockBase(
                
                    return this.__PROXY__.exportBlockSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportBlock(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportView = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportView");
          
              return this.__PROXY__.exportView(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportLinetype = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportLinetype");
          
              return this.__PROXY__.exportLinetype(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportEntities = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportEntities");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportEntities(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportEntity");
          
              return this.__PROXY__.exportEntity(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getEntityLayer = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getEntityLayer");
          
              return this.__PROXY__.getEntityLayer(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.startEntity = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.startEntity");
          
              return this.__PROXY__.startEntity(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.endEntity = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.__PROXY__.endEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.endEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportCurrentEntity = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportCurrentEntity");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportCurrentEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.unexportEntity = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.unexportEntity");
          
              return this.__PROXY__.unexportEntity(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportShapes = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportShapes");
          
              return this.__PROXY__.exportShapes(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportShape = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.__PROXY__.exportShapeSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportShapeSegment = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportShapeSegment");
          
              return this.__PROXY__.exportShapeSegment(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportLine = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportLine");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportLinetypeShape = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportLinetypeShape");
          
              return this.__PROXY__.exportLinetypeShape(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportRay = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportRay");
          
              return this.__PROXY__.exportRay(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportCircle = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportCircle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCircle(
                // call highest level JS implementation:
                //return this.exportCircleBase(
                
                    return this.__PROXY__.exportCircleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportCircle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportArc = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportArc");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportEllipse = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportEllipse");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportPolyline = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportPolyline");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportPolyline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportSpline = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportSpline");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportSpline(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportSplineSegment = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportSplineSegment");
          
              return this.__PROXY__.exportSplineSegment(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportExplodable = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportExplodable");
          
              return this.__PROXY__.exportExplodable(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportPainterPaths = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportPainterPaths");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportPainterPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportBoundingBoxPaths = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportBoundingBoxPaths");
          
              return this.__PROXY__.exportBoundingBoxPaths(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportImage = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportImage");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportText = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportText");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportClipRectangle = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportClipRectangle");
          
              return this.__PROXY__.exportClipRectangle(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.exportTransform = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportTransform");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                
                    return this.__PROXY__.exportTransformSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportEndTransform = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportEndTransform");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportEndTransform(
                // call highest level JS implementation:
                //return this.exportEndTransformBase(
                
                    return this.__PROXY__.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.exportThickPolyline = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportThickPolyline");
          
              return this.__PROXY__.exportThickPolyline(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportQuad = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportQuad");
          
              return this.__PROXY__.exportQuad(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportVerticalQuad = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportVerticalQuad");
          
              return this.__PROXY__.exportVerticalQuad(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportBox = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportBox");
          
              return this.__PROXY__.exportBox(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.exportRectangle = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.exportRectangle");
          
              return this.__PROXY__.exportRectangle(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.isTextRenderedAsText = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.isTextRenderedAsText");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isTextRenderedAsText(
                // call highest level JS implementation:
                //return this.isTextRenderedAsTextBase(
                
                    return this.__PROXY__.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RFileExporterAdapter.prototype.pushEntity = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.pushEntity");
          
              return this.__PROXY__.pushEntity(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.popEntity = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.popEntity");
          
              return this.__PROXY__.popEntity(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setDraftMode = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setDraftMode");
          
              return this.__PROXY__.setDraftMode(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.toggleDraftMode = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.toggleDraftMode");
          
              return this.__PROXY__.toggleDraftMode(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getDraftMode = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getDraftMode");
          
              return this.__PROXY__.getDraftMode(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setTwoColorSelectedMode");
          
              return this.__PROXY__.setTwoColorSelectedMode(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getTwoColorSelectedMode");
          
              return this.__PROXY__.getTwoColorSelectedMode(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setScreenBasedLinetypes");
          
              return this.__PROXY__.setScreenBasedLinetypes(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.toggleScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.toggleScreenBasedLinetypes");
          
              return this.__PROXY__.toggleScreenBasedLinetypes(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getScreenBasedLinetypes");
          
              return this.__PROXY__.getScreenBasedLinetypes(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.isVisualExporter = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.isVisualExporter");
          
              return this.__PROXY__.isVisualExporter(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setVisualExporter = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setVisualExporter");
          
              return this.__PROXY__.setVisualExporter(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getExportInvisible = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getExportInvisible");
          
              return this.__PROXY__.getExportInvisible(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setExportInvisible = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setExportInvisible");
          
              return this.__PROXY__.setExportInvisible(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getPixelSizeHint = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getPixelSizeHint");
          
              return this.__PROXY__.getPixelSizeHint(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getCurrentPixelSizeHint = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getCurrentPixelSizeHint");
          
              return this.__PROXY__.getCurrentPixelSizeHint(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setPixelSizeHint = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setPixelSizeHint");
          
              return this.__PROXY__.setPixelSizeHint(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getPixelUnit = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getPixelUnit");
          
              return this.__PROXY__.getPixelUnit(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setPixelUnit");
          
              return this.__PROXY__.setPixelUnit(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.getPixelWidth");
          
              return this.__PROXY__.getPixelWidth(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setPixelWidth = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setPixelWidth");
          
              return this.__PROXY__.setPixelWidth(...args);
            
        };
        
        // function 
        RFileExporterAdapter.prototype.setEnablePatterns = function(...args) 
          
        {
          //print("JS: RFileExporterAdapter.prototype.setEnablePatterns");
          
              return this.__PROXY__.setEnablePatterns(...args);
            
        };
        
      // function 
      RFileExporterAdapter.prototype.getCorrectedFileName = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.getCorrectedFileName");
        
      if (arguments.length == 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getCorrectedFileName(
                // call highest level JS implementation:
                //return this.getCorrectedFileNameBase(
                
                    return this.__PROXY__.getCorrectedFileNameSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.getCorrectedFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportFile = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportFile");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportPoint = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportPoint");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPoint(
                // call highest level JS implementation:
                //return this.exportPointBase(
                
                    return this.__PROXY__.exportPointSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportPoint(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportArcSegment = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportArcSegment");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportArcSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportLineSegment = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportLineSegment");
        
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
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportLineSegment(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportTriangle = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportTriangle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTriangle(
                // call highest level JS implementation:
                //return this.exportTriangleBase(
                
                    return this.__PROXY__.exportTriangleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportTriangle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.exportXLine = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportXLine");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportXLine(
                // call highest level JS implementation:
                //return this.exportXLineBase(
                
                    return this.__PROXY__.exportXLineSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportXLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterAdapter.prototype.getLineTypePatternScale = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.getLineTypePatternScale");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getLineTypePatternScale(
                // call highest level JS implementation:
                //return this.getLineTypePatternScaleBase(
                
                    return this.__PROXY__.getLineTypePatternScaleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.getLineTypePatternScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      RFileExporterAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFileExporterAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFileExporterAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileExporterAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileExporterAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFileExporterAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      