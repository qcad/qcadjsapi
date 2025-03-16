
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
              
                  copyProperties(this, wrapper, RGraphicsSceneQt);
                
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
          
            copyProperties(this, wrapper, RGraphicsSceneQt);
          

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
      RGraphicsSceneQt.prototype.getDocument = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.getDocument");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getDocument(
                // call highest level JS implementation:
                //return this.getDocumentBase(
                
                    return this.getDocumentSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.getDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.setColorSuper(
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
                
                    return this.setColorSuper(
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
                
                    return this.setLineweightSuper(
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
      RGraphicsSceneQt.prototype.startExport = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.startExport");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.startExport(
                // call highest level JS implementation:
                //return this.startExportBase(
                
                    return this.startExportSuper(
                  
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
                
                    return this.endExportSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.endExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportBlockSuper(
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
                
                    return this.exportBlockSuper(
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
      RGraphicsSceneQt.prototype.endEntity = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.endEntity");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.endEntity(
                // call highest level JS implementation:
                //return this.endEntityBase(
                
                    return this.endEntitySuper(
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
      RGraphicsSceneQt.prototype.exportShape = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.exportShape");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportShape(
                // call highest level JS implementation:
                //return this.exportShapeBase(
                
                    return this.exportShapeSuper(
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
      RGraphicsSceneQt.prototype.exportCircle = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.exportCircle");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.exportCircle(
                // call highest level JS implementation:
                //return this.exportCircleBase(
                
                    return this.exportCircleSuper(
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
                
                    return this.exportEllipseSuper(
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
      RGraphicsSceneQt.prototype.isTextRenderedAsText = function() 
        
      {
        //print("JS: RGraphicsSceneQt.prototype.isTextRenderedAsText");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.isTextRenderedAsText(
                // call highest level JS implementation:
                //return this.isTextRenderedAsTextBase(
                
                    return this.isTextRenderedAsTextSuper(
                  
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
                
                    return this.exportCurrentEntitySuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneQt);
  }

  
  else {
    
        print("RGraphicsSceneQt.exportCurrentEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

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

      