
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
              copyProperties(this, wrapper, RFileExporter);
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
        RFileExporter.prototype.getDocument = function() 
          
        {
          //print("JS: RFileExporter.prototype.getDocument");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                return this.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                return this.setColorSuper(
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
                return this.setColorSuper(
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
                return this.setLineweightSuper(
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
        RFileExporter.prototype.startExport = function() 
          
        {
          //print("JS: RFileExporter.prototype.startExport");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                return this.startExportSuper(
                  
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
                return this.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                return this.exportBlockSuper(
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
                return this.exportBlockSuper(
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
                return this.exportEntitiesSuper(
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
        RFileExporter.prototype.endEntity = function() 
          
        {
          //print("JS: RFileExporter.prototype.endEntity");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                return this.endEntitySuper(
                  
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
                return this.exportCurrentEntitySuper(
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
        RFileExporter.prototype.exportShape = function() 
          
        {
          //print("JS: RFileExporter.prototype.exportShape");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                return this.exportShapeSuper(
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
                return this.exportLineSuper(
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
                return this.exportLineSegmentSuper(
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
        RFileExporter.prototype.exportPoint = function() 
          
        {
          //print("JS: RFileExporter.prototype.exportPoint");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPoint(
                // call highest level JS implementation:
                //return this.exportPointBase(
                return this.exportPointSuper(
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
                return this.exportCircleSuper(
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
                return this.exportArcSuper(
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
                return this.exportArcSegmentSuper(
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
                return this.exportEllipseSuper(
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
                return this.exportPolylineSuper(
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
                return this.exportSplineSuper(
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
                return this.exportPainterPathsSuper(
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
                return this.exportImageSuper(
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
                return this.exportTextSuper(
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
        RFileExporter.prototype.exportTransform = function() 
          
        {
          //print("JS: RFileExporter.prototype.exportTransform");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                return this.exportTransformSuper(
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
                return this.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                return this.exportTriangleSuper(
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
        RFileExporter.prototype.getLineTypePatternScale = function() 
          
        {
          //print("JS: RFileExporter.prototype.getLineTypePatternScale");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getLineTypePatternScale(
                // call highest level JS implementation:
                //return this.getLineTypePatternScaleBase(
                return this.getLineTypePatternScaleSuper(
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
                return this.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporter);
  }

  
  else {
    
        print("RFileExporter.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                return this.exportFileSuper(
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
    