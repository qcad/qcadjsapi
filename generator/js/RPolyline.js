
      // auto generated
      //var self;

      // class constructor:
      function RPolyline() {
        

        // should be RPolyline_BaseJs.call(this, engine):
        //RPolyline.prototype = new RPolyline_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolyline.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPolyline);
            //}
          }
          else {
            qWarning("RPolyline.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolyline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolyline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolyline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline(): wrong number / type of arguments");
      
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

      //RPolyline.prototype = new RPolyline_BaseJs(engine);
      //RPolyline.prototype = new RPolyline_Wrapper(engine);
      RPolyline.prototype = new Object();

      RPolyline.prototype.toString = function() {
          //return "RPolyline [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolyline [JS]";
        };
      RPolyline.getObjectType = function() {
        return RJSType_RPolyline.getIdStatic();
      };

      RPolyline.prototype.getObjectType = function() {
        return RJSType_RPolyline.getIdStatic();
      };

      RPolyline.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolyline.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RExplodable.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RPolyline.Unknown = RPolyline_Wrapper.Unknown;
RPolyline.Point = RPolyline_Wrapper.Point;
RPolyline.Line = RPolyline_Wrapper.Line;
RPolyline.Arc = RPolyline_Wrapper.Arc;
RPolyline.Circle = RPolyline_Wrapper.Circle;
RPolyline.Ellipse = RPolyline_Wrapper.Ellipse;
RPolyline.Polyline = RPolyline_Wrapper.Polyline;
RPolyline.Spline = RPolyline_Wrapper.Spline;
RPolyline.Triangle = RPolyline_Wrapper.Triangle;
RPolyline.XLine = RPolyline_Wrapper.XLine;
RPolyline.Ray = RPolyline_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RPolyline.isStraight = function() 
          
        {
          //print("JS: RPolyline.isStraight");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isStraight(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isStraight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.hasProxy = function() 
          
        {
          //print("JS: RPolyline.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPolyline.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolyline.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    