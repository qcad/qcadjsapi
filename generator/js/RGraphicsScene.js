
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
              
                  copyProperties(this, wrapper, RGraphicsScene);
                
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
      RGraphicsScene.prototype.getDocument = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.setColorSuper(
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
                
                    return this.setColorSuper(
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
                
                    return this.setLineweightSuper(
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
      RGraphicsScene.prototype.startExport = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.startExportSuper(
                  
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
                
                    return this.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportBlockSuper(
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
                
                    return this.exportBlockSuper(
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
                
                    return this.exportEntitiesSuper(
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
      RGraphicsScene.prototype.endEntity = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.endEntitySuper(
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
      RGraphicsScene.prototype.exportShape = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.exportShapeSuper(
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
                
                    return this.exportLineSuper(
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
                
                    return this.exportLineSegmentSuper(
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
      RGraphicsScene.prototype.exportPoint = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportPoint");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportPoint(
                // call highest level JS implementation:
                //return this.exportPointBase(
                
                    return this.exportPointSuper(
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
                
                    return this.exportCircleSuper(
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
                
                    return this.exportArcSuper(
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
                
                    return this.exportArcSegmentSuper(
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
                
                    return this.exportEllipseSuper(
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
                
                    return this.exportPolylineSuper(
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
                
                    return this.exportSplineSuper(
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
                
                    return this.exportPainterPathsSuper(
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
                
                    return this.exportImageSuper(
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
                
                    return this.exportTextSuper(
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
      RGraphicsScene.prototype.exportTransform = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.exportTransform");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportTransform(
                // call highest level JS implementation:
                //return this.exportTransformBase(
                
                    return this.exportTransformSuper(
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
                
                    return this.exportEndTransformSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportTriangleSuper(
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
      RGraphicsScene.prototype.getLineTypePatternScale = function() 
        
      {
        //print("JS: RGraphicsScene.prototype.getLineTypePatternScale");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getLineTypePatternScale(
                // call highest level JS implementation:
                //return this.getLineTypePatternScaleBase(
                
                    return this.getLineTypePatternScaleSuper(
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
                
                    return this.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportCurrentEntitySuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsScene);
  }

  
  else {
    
        print("RGraphicsScene.exportCurrentEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

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

      