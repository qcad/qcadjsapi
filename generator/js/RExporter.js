
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
              
                  copyProperties(this, wrapper, RExporter);
                
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
      RExporter.prototype.getDocument = function() 
        
      {
        //print("JS: RExporter.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.setColorSuper(
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
                
                    return this.setColorSuper(
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
                
                    return this.setLineweightSuper(
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
      RExporter.prototype.startExport = function() 
        
      {
        //print("JS: RExporter.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.startExportSuper(
                  
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
                
                    return this.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportBlockSuper(
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
                
                    return this.exportBlockSuper(
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
                
                    return this.exportEntitiesSuper(
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
      RExporter.prototype.endEntity = function() 
        
      {
        //print("JS: RExporter.prototype.endEntity");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.endEntitySuper(
                  
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
                
                    return this.exportCurrentEntitySuper(
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
      RExporter.prototype.exportShape = function() 
        
      {
        //print("JS: RExporter.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.exportShapeSuper(
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
                
                    return this.exportLineSuper(
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
                
                    return this.exportLineSegmentSuper(
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
      RExporter.prototype.exportPoint = function() 
        
      {
        //print("JS: RExporter.prototype.exportPoint");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPoint(
                // call highest level JS implementation:
                //return this.exportPointBase(
                
                    return this.exportPointSuper(
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
                
                    return this.exportCircleSuper(
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
                
                    return this.exportArcSuper(
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
                
                    return this.exportArcSegmentSuper(
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
                
                    return this.exportEllipseSuper(
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
                
                    return this.exportPolylineSuper(
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
                
                    return this.exportSplineSuper(
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
                
                    return this.exportPainterPathsSuper(
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
                
                    return this.exportImageSuper(
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
                
                    return this.exportTextSuper(
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
      RExporter.prototype.exportTransform = function() 
        
      {
        //print("JS: RExporter.prototype.exportTransform");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                
                    return this.exportTransformSuper(
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
                
                    return this.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportTriangleSuper(
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
      RExporter.prototype.getLineTypePatternScale = function() 
        
      {
        //print("JS: RExporter.prototype.getLineTypePatternScale");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getLineTypePatternScale(
                // call highest level JS implementation:
                //return this.getLineTypePatternScaleBase(
                
                    return this.getLineTypePatternScaleSuper(
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
                
                    return this.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RExporter);
  }

  
  else {
    
        print("RExporter.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

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

      