
      // auto generated
      //var self;

      // class constructor:
      function RTextLabel() {
        

        // should be RTextLabel_BaseJs.call(this, engine):
        //RTextLabel.prototype = new RTextLabel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextLabel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextLabel);
            //}
          }
          else {
            qWarning("RTextLabel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RTextLabel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextLabel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTextLabel_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextLabel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel(): wrong number / type of arguments");
      
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

      //RTextLabel.prototype = new RTextLabel_BaseJs(engine);
      //RTextLabel.prototype = new RTextLabel_Wrapper(engine);
      RTextLabel.prototype = new Object();

      RTextLabel.prototype.toString = function() {
          //return "RTextLabel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextLabel [JS]";
        };
      RTextLabel.getObjectType = function() {
        return RJSType_RTextLabel.getIdStatic();
      };

      RTextLabel.prototype.getObjectType = function() {
        return RJSType_RTextLabel.getIdStatic();
      };

      RTextLabel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextLabel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPoint.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTextLabel.Unknown = RTextLabel_Wrapper.Unknown;
RTextLabel.Point = RTextLabel_Wrapper.Point;
RTextLabel.Line = RTextLabel_Wrapper.Line;
RTextLabel.Arc = RTextLabel_Wrapper.Arc;
RTextLabel.Circle = RTextLabel_Wrapper.Circle;
RTextLabel.Ellipse = RTextLabel_Wrapper.Ellipse;
RTextLabel.Polyline = RTextLabel_Wrapper.Polyline;
RTextLabel.Spline = RTextLabel_Wrapper.Spline;
RTextLabel.Triangle = RTextLabel_Wrapper.Triangle;
RTextLabel.XLine = RTextLabel_Wrapper.XLine;
RTextLabel.Ray = RTextLabel_Wrapper.Ray;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextLabel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextLabel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    