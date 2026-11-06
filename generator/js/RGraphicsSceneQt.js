
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsSceneQt() {
        

        // should be RGraphicsSceneQt_BaseJs.call(this, engine):
        //RGraphicsSceneQt.prototype = new RGraphicsSceneQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsSceneQt.getIdStatic()))) {

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
            qWarning("RGraphicsSceneQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RGraphicsSceneQt_Wrapper(
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

      

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt(): wrong number / type of arguments");
      
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

      //RGraphicsSceneQt.prototype = new RGraphicsSceneQt_BaseJs(engine);
      //RGraphicsSceneQt.prototype = new RGraphicsSceneQt_Wrapper(engine);
      RGraphicsSceneQt.prototype = new Object();


      RGraphicsSceneQt.prototype.toString = function() {
          //return "RGraphicsSceneQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsSceneQt [JS]";
        };
      RGraphicsSceneQt.getObjectType = function() {
        return RJSType_RGraphicsSceneQt.getIdStatic();
      };

      RGraphicsSceneQt.prototype.getObjectType = function() {
        return RJSType_RGraphicsSceneQt.getIdStatic();
      };

      RGraphicsSceneQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsSceneQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RExporter.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RGraphicsScene.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RGraphicsSceneQt.prototype.init = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getErrorMessage = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getErrorMessage");
          
              return this.__PROXY__.getErrorMessage(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setLayerSource = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setLayerSource");
          
              return this.__PROXY__.setLayerSource(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setBlockSource = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setBlockSource");
          
              return this.__PROXY__.setBlockSource(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.getDocument = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.__PROXY__.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.setProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setProjectionRenderingHint");
          
              return this.__PROXY__.setProjectionRenderingHint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getProjectionRenderingHint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getProjectionRenderingHint");
          
              return this.__PROXY__.getProjectionRenderingHint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setClipping = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getClipping = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getClipping");
          
              return this.__PROXY__.getClipping(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setPen = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setPen");
          
              return this.__PROXY__.setPen(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getPen = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getPen");
          
              return this.__PROXY__.getPen(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setBrush = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setBrush");
          
              return this.__PROXY__.setBrush(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getBrush = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getBrush");
          
              return this.__PROXY__.getBrush(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getColor = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setEntityAttributes = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setEntityAttributes");
          
              return this.__PROXY__.setEntityAttributes(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setStyle = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setStyle");
          
              return this.__PROXY__.setStyle(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setBrushStyle = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setBrushStyle");
          
              return this.__PROXY__.setBrushStyle(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.setColor = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.setColor");
        
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
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
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
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.setColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsSceneQt.prototype.setLineweight = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.setLineweight");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setLineweight(
                // call highest level JS implementation:
                //return this.setLineweightBase(
                
                    return this.__PROXY__.setLineweightSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.setLineweight(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setLinetypeId");
          
              return this.__PROXY__.setLinetypeId(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setLinetypePattern");
          
              return this.__PROXY__.setLinetypePattern(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getLinetypePattern");
          
              return this.__PROXY__.getLinetypePattern(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getBlockRefOrEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getBlockRefOrEntity");
          
              return this.__PROXY__.getBlockRefOrEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getBlockRefOrEntityId = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getBlockRefOrEntityId");
          
              return this.__PROXY__.getBlockRefOrEntityId(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getEntity");
          
              return this.__PROXY__.getEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getCurrentBlockRef = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getCurrentBlockRef");
          
              return this.__PROXY__.getCurrentBlockRef(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getCurrentViewport = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getCurrentViewport");
          
              return this.__PROXY__.getCurrentViewport(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.isEntitySelected = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.isEntitySelected");
          
              return this.__PROXY__.isEntitySelected(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.isPatternContinuous = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.isPatternContinuous");
          
              return this.__PROXY__.isPatternContinuous(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.startExport = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.__PROXY__.startExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.startExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsSceneQt.prototype.endExport = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.endExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endExport(
                // call highest level JS implementation:
                //return this.endExportBase(
                
                    return this.__PROXY__.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.exportDocument = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportDocument");
          
              return this.__PROXY__.exportDocument(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportDocumentSetting = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportDocumentSetting");
          
              return this.__PROXY__.exportDocumentSetting(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLayers = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLayers");
          
              return this.__PROXY__.exportLayers(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLayerStates = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLayerStates");
          
              return this.__PROXY__.exportLayerStates(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportBlocks = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportBlocks");
          
              return this.__PROXY__.exportBlocks(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportViews = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportViews");
          
              return this.__PROXY__.exportViews(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLinetypes");
          
              return this.__PROXY__.exportLinetypes(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLayer = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLayer");
          
              return this.__PROXY__.exportLayer(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLayerState = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLayerState");
          
              return this.__PROXY__.exportLayerState(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.exportBlock = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.exportBlock");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportBlock(
                // call highest level JS implementation:
                //return this.exportBlockBase(
                
                    return this.__PROXY__.exportBlockSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
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
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.exportBlock(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.exportView = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportView");
          
              return this.__PROXY__.exportView(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLinetype = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLinetype");
          
              return this.__PROXY__.exportLinetype(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportEntity");
          
              return this.__PROXY__.exportEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getEntityLayer = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getEntityLayer");
          
              return this.__PROXY__.getEntityLayer(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.endEntity = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.__PROXY__.endEntitySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.endEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.exportShapes = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportShapes");
          
              return this.__PROXY__.exportShapes(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.exportShape = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.__PROXY__.exportShapeSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.exportShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.exportShapeSegment = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportShapeSegment");
          
              return this.__PROXY__.exportShapeSegment(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLinetypeShape = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLinetypeShape");
          
              return this.__PROXY__.exportLinetypeShape(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.exportCircle = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.exportCircle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCircle(
                // call highest level JS implementation:
                //return this.exportCircleBase(
                
                    return this.__PROXY__.exportCircleSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.exportCircle(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RGraphicsSceneQt.prototype.exportEllipse = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.exportEllipse");
        
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
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.exportEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.exportSplineSegment = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportSplineSegment");
          
              return this.__PROXY__.exportSplineSegment(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportExplodable = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportExplodable");
          
              return this.__PROXY__.exportExplodable(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportBoundingBoxPaths = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportBoundingBoxPaths");
          
              return this.__PROXY__.exportBoundingBoxPaths(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportQuad = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportQuad");
          
              return this.__PROXY__.exportQuad(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportVerticalQuad = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportVerticalQuad");
          
              return this.__PROXY__.exportVerticalQuad(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportBox = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportBox");
          
              return this.__PROXY__.exportBox(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.isTextRenderedAsText = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.isTextRenderedAsText");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isTextRenderedAsText(
                // call highest level JS implementation:
                //return this.isTextRenderedAsTextBase(
                
                    return this.__PROXY__.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.pushEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.pushEntity");
          
              return this.__PROXY__.pushEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.popEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.popEntity");
          
              return this.__PROXY__.popEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setDraftMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setDraftMode");
          
              return this.__PROXY__.setDraftMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.toggleDraftMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.toggleDraftMode");
          
              return this.__PROXY__.toggleDraftMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getDraftMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getDraftMode");
          
              return this.__PROXY__.getDraftMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setTwoColorSelectedMode");
          
              return this.__PROXY__.setTwoColorSelectedMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getTwoColorSelectedMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getTwoColorSelectedMode");
          
              return this.__PROXY__.getTwoColorSelectedMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setScreenBasedLinetypes");
          
              return this.__PROXY__.setScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.toggleScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.toggleScreenBasedLinetypes");
          
              return this.__PROXY__.toggleScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.isVisualExporter = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.isVisualExporter");
          
              return this.__PROXY__.isVisualExporter(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setVisualExporter = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setVisualExporter");
          
              return this.__PROXY__.setVisualExporter(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getExportInvisible = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getExportInvisible");
          
              return this.__PROXY__.getExportInvisible(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setExportInvisible = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setExportInvisible");
          
              return this.__PROXY__.setExportInvisible(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getPixelSizeHint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getPixelSizeHint");
          
              return this.__PROXY__.getPixelSizeHint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getCurrentPixelSizeHint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getCurrentPixelSizeHint");
          
              return this.__PROXY__.getCurrentPixelSizeHint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setPixelSizeHint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setPixelSizeHint");
          
              return this.__PROXY__.setPixelSizeHint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getPixelUnit = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getPixelUnit");
          
              return this.__PROXY__.getPixelUnit(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setPixelUnit");
          
              return this.__PROXY__.setPixelUnit(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getPixelWidth");
          
              return this.__PROXY__.getPixelWidth(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setPixelWidth = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setPixelWidth");
          
              return this.__PROXY__.setPixelWidth(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setEnablePatterns = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setEnablePatterns");
          
              return this.__PROXY__.setEnablePatterns(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getDocumentInterface = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getDocumentInterface");
          
              return this.__PROXY__.getDocumentInterface(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getGraphicsViews = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getGraphicsViews");
          
              return this.__PROXY__.getGraphicsViews(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportDocumentSettings = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportDocumentSettings");
          
              return this.__PROXY__.exportDocumentSettings(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.regenerate = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.regenerate");
          
              return this.__PROXY__.regenerate(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.regenerateViews = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.regenerateViews");
          
              return this.__PROXY__.regenerateViews(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.repaintViews = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.repaintViews");
          
              return this.__PROXY__.repaintViews(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleTerminateEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleTerminateEvent");
          
              return this.__PROXY__.handleTerminateEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleKeyPressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleKeyPressEvent");
          
              return this.__PROXY__.handleKeyPressEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleKeyReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleKeyReleaseEvent");
          
              return this.__PROXY__.handleKeyReleaseEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleMouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleMouseMoveEvent");
          
              return this.__PROXY__.handleMouseMoveEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleMousePressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleMousePressEvent");
          
              return this.__PROXY__.handleMousePressEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleMouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleMouseReleaseEvent");
          
              return this.__PROXY__.handleMouseReleaseEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleMouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleMouseDoubleClickEvent");
          
              return this.__PROXY__.handleMouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleWheelEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleWheelEvent");
          
              return this.__PROXY__.handleWheelEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleTabletEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleTabletEvent");
          
              return this.__PROXY__.handleTabletEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handleSwipeGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handleSwipeGestureEvent");
          
              return this.__PROXY__.handleSwipeGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handlePanGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handlePanGestureEvent");
          
              return this.__PROXY__.handlePanGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.handlePinchGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.handlePinchGestureEvent");
          
              return this.__PROXY__.handlePinchGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.registerView = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.registerView");
          
              return this.__PROXY__.registerView(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.unregisterView = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.unregisterView");
          
              return this.__PROXY__.unregisterView(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.beginPreview = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.beginPreview");
          
              return this.__PROXY__.beginPreview(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.endPreview = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.endPreview");
          
              return this.__PROXY__.endPreview(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.isPreviewEmpty = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.isPreviewEmpty");
          
              return this.__PROXY__.isPreviewEmpty(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.beginNoColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.beginNoColorMode");
          
              return this.__PROXY__.beginNoColorMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.endNoColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.endNoColorMode");
          
              return this.__PROXY__.endNoColorMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getNoColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getNoColorMode");
          
              return this.__PROXY__.getNoColorMode(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getHighlightedReferencePoint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getHighlightedReferencePoint");
          
              return this.__PROXY__.getHighlightedReferencePoint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.highlightReferencePoint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.highlightReferencePoint");
          
              return this.__PROXY__.highlightReferencePoint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.selectReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.selectReferencePoints");
          
              return this.__PROXY__.selectReferencePoints(...args);
            
        };
    
      // function 
      RGraphicsSceneQt.prototype.exportCurrentEntity = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.exportCurrentEntity");
        
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
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.exportCurrentEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsSceneQt.prototype.countReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.countReferencePoints");
          
              return this.__PROXY__.countReferencePoints(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.hasSelectedReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.hasSelectedReferencePoints");
          
              return this.__PROXY__.hasSelectedReferencePoints(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportReferencePoints = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportReferencePoints");
          
              return this.__PROXY__.exportReferencePoints(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getGraphicsView = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getGraphicsView");
          
              return this.__PROXY__.getGraphicsView(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.clear = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.updateSelectionStatus = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.updateSelectionStatus");
          
              return this.__PROXY__.updateSelectionStatus(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.clearPreview = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.clearPreview");
          
              return this.__PROXY__.clearPreview(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportEntities = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportEntities");
          
              return this.__PROXY__.exportEntities(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportEntitiesThread = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportEntitiesThread");
          
              return this.__PROXY__.exportEntitiesThread(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportEntityThread = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportEntityThread");
          
              return this.__PROXY__.exportEntityThread(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.beginPath = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.beginPath");
          
              return this.__PROXY__.beginPath(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.endPath = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.endPath");
          
              return this.__PROXY__.endPath(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.transformAndApplyPatternPath = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.transformAndApplyPatternPath");
          
              return this.__PROXY__.transformAndApplyPatternPath(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.unexportEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.unexportEntity");
          
              return this.__PROXY__.unexportEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportPoint = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportPoint");
          
              return this.__PROXY__.exportPoint(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLine = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLine");
          
              return this.__PROXY__.exportLine(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportArc = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportArc");
          
              return this.__PROXY__.exportArc(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportThickPolyline = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportThickPolyline");
          
              return this.__PROXY__.exportThickPolyline(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportPolyline = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportPolyline");
          
              return this.__PROXY__.exportPolyline(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportPolylineFill = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportPolylineFill");
          
              return this.__PROXY__.exportPolylineFill(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportSpline = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportSpline");
          
              return this.__PROXY__.exportSpline(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportArcSegment = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportArcSegment");
          
              return this.__PROXY__.exportArcSegment(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportLineSegment = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportLineSegment");
          
              return this.__PROXY__.exportLineSegment(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportXLine = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportXLine");
          
              return this.__PROXY__.exportXLine(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportRay = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportRay");
          
              return this.__PROXY__.exportRay(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportTriangle = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportTriangle");
          
              return this.__PROXY__.exportTriangle(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportRectangle = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportRectangle");
          
              return this.__PROXY__.exportRectangle(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportPainterPaths = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportPainterPaths");
          
              return this.__PROXY__.exportPainterPaths(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportImage = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportImage");
          
              return this.__PROXY__.exportImage(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportText = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportText");
          
              return this.__PROXY__.exportText(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportClipRectangle = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportClipRectangle");
          
              return this.__PROXY__.exportClipRectangle(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportTransform = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportTransform");
          
              return this.__PROXY__.exportTransform(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.exportEndTransform = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.exportEndTransform");
          
              return this.__PROXY__.exportEndTransform(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getLineTypePatternScale = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getLineTypePatternScale");
          
              return this.__PROXY__.getLineTypePatternScale(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.highlightEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.highlightEntity");
          
              return this.__PROXY__.highlightEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.deleteDrawables = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.deleteDrawables");
          
              return this.__PROXY__.deleteDrawables(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getDrawablesList = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getDrawablesList");
          
              return this.__PROXY__.getDrawablesList(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.hasPreview = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.hasPreview");
          
              return this.__PROXY__.hasPreview(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getPreviewEntityIds = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getPreviewEntityIds");
          
              return this.__PROXY__.getPreviewEntityIds(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.addToPreview = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.addToPreview");
          
              return this.__PROXY__.addToPreview(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.addTextToPreview = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.addTextToPreview");
          
              return this.__PROXY__.addTextToPreview(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.hasClipRectangleFor = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.hasClipRectangleFor");
          
              return this.__PROXY__.hasClipRectangleFor(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getClipRectangle = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getClipRectangle");
          
              return this.__PROXY__.getClipRectangle(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.addDrawable = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.addDrawable");
          
              return this.__PROXY__.addDrawable(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.startEntity = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.startEntity");
          
              return this.__PROXY__.startEntity(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.getScreenBasedLinetypes = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.getScreenBasedLinetypes");
          
              return this.__PROXY__.getScreenBasedLinetypes(...args);
            
        };
    
        // function 
        RGraphicsSceneQt.prototype.dump = function(...args) 
          
        {
          //print("JS: RGraphicsSceneQt.prototype.dump");
          
              return this.__PROXY__.dump(...args);
            
        };
    

      // static functions:
      RGraphicsSceneQt.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGraphicsSceneQt.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGraphicsSceneQt.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsSceneQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsSceneQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGraphicsSceneQt.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      