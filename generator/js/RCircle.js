
      // auto generated
      //var self;

      // class constructor:
      function RCircle() {
        

        // should be RCircle_BaseJs.call(this, engine):
        //RCircle.prototype = new RCircle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCircle.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCircle);
            //}
          }
          else {
            qWarning("RCircle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //RCircle.prototype = new RCircle_BaseJs(engine);
      //RCircle.prototype = new RCircle_Wrapper(engine);
      RCircle.prototype = new Object();

      RCircle.prototype.toString = function() {
          //return "RCircle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCircle [JS]";
        };
      RCircle.getObjectType = function() {
        return RJSType_RCircle.getIdStatic();
      };

      RCircle.prototype.getObjectType = function() {
        return RJSType_RCircle.getIdStatic();
      };

      RCircle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCircle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RCircle.Unknown = RCircle_Wrapper.Unknown;
RCircle.Point = RCircle_Wrapper.Point;
RCircle.Line = RCircle_Wrapper.Line;
RCircle.Arc = RCircle_Wrapper.Arc;
RCircle.Circle = RCircle_Wrapper.Circle;
RCircle.Ellipse = RCircle_Wrapper.Ellipse;
RCircle.Polyline = RCircle_Wrapper.Polyline;
RCircle.Spline = RCircle_Wrapper.Spline;
RCircle.Triangle = RCircle_Wrapper.Triangle;
RCircle.XLine = RCircle_Wrapper.XLine;
RCircle.Ray = RCircle_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RCircle.createFrom2Points = function() 
          
        {
          //print("JS: RCircle.createFrom2Points");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.createFrom2Points(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.createFrom2Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.createFrom3Points = function() 
          
        {
          //print("JS: RCircle.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCircle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCircle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    