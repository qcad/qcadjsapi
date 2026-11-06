
      // auto generated
      //var self;

      // class constructor:
      function RTransform() {
        

        // should be RTransform_BaseJs.call(this, engine):
        //RTransform.prototype = new RTransform_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransform.getIdStatic()))) {

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
            qWarning("RTransform.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransform_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransform);
  }

  
  else {
    
        print("RTransform(): wrong number / type of arguments");
      
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

      //RTransform.prototype = new RTransform_BaseJs(engine);
      //RTransform.prototype = new RTransform_Wrapper(engine);
      RTransform.prototype = new Object();


      RTransform.prototype.toString = function() {
          //return "RTransform [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransform [JS]";
        };
      RTransform.getObjectType = function() {
        return RJSType_RTransform.getIdStatic();
      };

      RTransform.prototype.getObjectType = function() {
        return RJSType_RTransform.getIdStatic();
      };

      RTransform.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransform.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTransform.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RTransform.prototype.isAffine = function(...args) 
          
        {
          //print("JS: RTransform.prototype.isAffine");
          
              return this.__PROXY__.isAffine(...args);
            
        };
    
        // function 
        RTransform.prototype.isIdentity = function(...args) 
          
        {
          //print("JS: RTransform.prototype.isIdentity");
          
              return this.__PROXY__.isIdentity(...args);
            
        };
    
        // function 
        RTransform.prototype.isInvertible = function(...args) 
          
        {
          //print("JS: RTransform.prototype.isInvertible");
          
              return this.__PROXY__.isInvertible(...args);
            
        };
    
        // function 
        RTransform.prototype.isScaling = function(...args) 
          
        {
          //print("JS: RTransform.prototype.isScaling");
          
              return this.__PROXY__.isScaling(...args);
            
        };
    
        // function 
        RTransform.prototype.isRotating = function(...args) 
          
        {
          //print("JS: RTransform.prototype.isRotating");
          
              return this.__PROXY__.isRotating(...args);
            
        };
    
        // function 
        RTransform.prototype.isTranslating = function(...args) 
          
        {
          //print("JS: RTransform.prototype.isTranslating");
          
              return this.__PROXY__.isTranslating(...args);
            
        };
    
        // function 
        RTransform.prototype.type = function(...args) 
          
        {
          //print("JS: RTransform.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        RTransform.prototype.determinant = function(...args) 
          
        {
          //print("JS: RTransform.prototype.determinant");
          
              return this.__PROXY__.determinant(...args);
            
        };
    
        // function 
        RTransform.prototype.m11 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m11");
          
              return this.__PROXY__.m11(...args);
            
        };
    
        // function 
        RTransform.prototype.m12 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m12");
          
              return this.__PROXY__.m12(...args);
            
        };
    
        // function 
        RTransform.prototype.m13 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m13");
          
              return this.__PROXY__.m13(...args);
            
        };
    
        // function 
        RTransform.prototype.m21 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m21");
          
              return this.__PROXY__.m21(...args);
            
        };
    
        // function 
        RTransform.prototype.m22 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m22");
          
              return this.__PROXY__.m22(...args);
            
        };
    
        // function 
        RTransform.prototype.m23 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m23");
          
              return this.__PROXY__.m23(...args);
            
        };
    
        // function 
        RTransform.prototype.m31 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m31");
          
              return this.__PROXY__.m31(...args);
            
        };
    
        // function 
        RTransform.prototype.m32 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m32");
          
              return this.__PROXY__.m32(...args);
            
        };
    
        // function 
        RTransform.prototype.m33 = function(...args) 
          
        {
          //print("JS: RTransform.prototype.m33");
          
              return this.__PROXY__.m33(...args);
            
        };
    
        // function 
        RTransform.prototype.dx = function(...args) 
          
        {
          //print("JS: RTransform.prototype.dx");
          
              return this.__PROXY__.dx(...args);
            
        };
    
        // function 
        RTransform.prototype.dy = function(...args) 
          
        {
          //print("JS: RTransform.prototype.dy");
          
              return this.__PROXY__.dy(...args);
            
        };
    
        // function 
        RTransform.prototype.setMatrix = function(...args) 
          
        {
          //print("JS: RTransform.prototype.setMatrix");
          
              return this.__PROXY__.setMatrix(...args);
            
        };
    
        // function 
        RTransform.prototype.inverted = function(...args) 
          
        {
          //print("JS: RTransform.prototype.inverted");
          
              return this.__PROXY__.inverted(...args);
            
        };
    
        // function 
        RTransform.prototype.adjoint = function(...args) 
          
        {
          //print("JS: RTransform.prototype.adjoint");
          
              return this.__PROXY__.adjoint(...args);
            
        };
    
        // function 
        RTransform.prototype.transposed = function(...args) 
          
        {
          //print("JS: RTransform.prototype.transposed");
          
              return this.__PROXY__.transposed(...args);
            
        };
    
        // function 
        RTransform.prototype.shear = function(...args) 
          
        {
          //print("JS: RTransform.prototype.shear");
          
              return this.__PROXY__.shear(...args);
            
        };
    
        // function 
        RTransform.prototype.reset = function(...args) 
          
        {
          //print("JS: RTransform.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        RTransform.prototype.map = function(...args) 
          
        {
          //print("JS: RTransform.prototype.map");
          
              return this.__PROXY__.map(...args);
            
        };
    
        // function 
        RTransform.prototype.mapToPolygon = function(...args) 
          
        {
          //print("JS: RTransform.prototype.mapToPolygon");
          
              return this.__PROXY__.mapToPolygon(...args);
            
        };
    
        // function 
        RTransform.prototype.mapRect = function(...args) 
          
        {
          //print("JS: RTransform.prototype.mapRect");
          
              return this.__PROXY__.mapRect(...args);
            
        };
    
        // function 
        RTransform.prototype.operator_multiply_assign = function(...args) 
          
        {
          //print("JS: RTransform.prototype.operator_multiply_assign");
          
              return this.__PROXY__.operator_multiply_assign(...args);
            
        };
    
        // function 
        RTransform.prototype.translate = function(...args) 
          
        {
          //print("JS: RTransform.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
    
        // function 
        RTransform.prototype.scale = function(...args) 
          
        {
          //print("JS: RTransform.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
    
        // function 
        RTransform.prototype.rotateRadians = function(...args) 
          
        {
          //print("JS: RTransform.prototype.rotateRadians");
          
              return this.__PROXY__.rotateRadians(...args);
            
        };
    
        // function 
        RTransform.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTransform.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
    
        // function 
        RTransform.prototype.getOps = function(...args) 
          
        {
          //print("JS: RTransform.prototype.getOps");
          
              return this.__PROXY__.getOps(...args);
            
        };
    

      // static functions:
      RTransform.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RTransform.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RTransform.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTransform.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransform.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTransform.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      