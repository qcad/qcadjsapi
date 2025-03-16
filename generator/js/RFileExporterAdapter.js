
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
              
                  copyProperties(this, wrapper, RFileExporterAdapter);
                
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
          
            copyProperties(this, wrapper, RFileExporterAdapter);
          

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
          
            copyProperties(this, wrapper, RFileExporterAdapter);
          

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
      RFileExporterAdapter.prototype.getDocument = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.setColorSuper(
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
                
                    return this.setColorSuper(
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
                
                    return this.setLineweightSuper(
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
      RFileExporterAdapter.prototype.startExport = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.startExportSuper(
                  
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
                
                    return this.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportBlockSuper(
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
                
                    return this.exportBlockSuper(
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
                
                    return this.exportEntitiesSuper(
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
      RFileExporterAdapter.prototype.endEntity = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.endEntitySuper(
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
                
                    return this.exportCurrentEntitySuper(
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
      RFileExporterAdapter.prototype.exportShape = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.exportShapeSuper(
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
                
                    return this.exportLineSuper(
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
      RFileExporterAdapter.prototype.exportCircle = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportCircle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCircle(
                // call highest level JS implementation:
                //return this.exportCircleBase(
                
                    return this.exportCircleSuper(
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
                
                    return this.exportArcSuper(
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
                
                    return this.exportEllipseSuper(
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
                
                    return this.exportPolylineSuper(
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
                
                    return this.exportSplineSuper(
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
                
                    return this.exportPainterPathsSuper(
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
                
                    return this.exportImageSuper(
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
                
                    return this.exportTextSuper(
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
      RFileExporterAdapter.prototype.exportTransform = function() 
        
      {
        //print("JS: RFileExporterAdapter.prototype.exportTransform");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                
                    return this.exportTransformSuper(
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
                
                    return this.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterAdapter);
  }

  
  else {
    
        print("RFileExporterAdapter.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.getCorrectedFileNameSuper(
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
                
                    return this.exportFileSuper(
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
                
                    return this.exportPointSuper(
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
                
                    return this.exportArcSegmentSuper(
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
                
                    return this.exportLineSegmentSuper(
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
                
                    return this.exportTriangleSuper(
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
                
                    return this.exportXLineSuper(
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
                
                    return this.getLineTypePatternScaleSuper(
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

      