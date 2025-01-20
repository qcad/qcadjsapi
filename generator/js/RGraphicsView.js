
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsView() {
        

        // should be RGraphicsView_BaseJs.call(this, engine):
        //RGraphicsView.prototype = new RGraphicsView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsView.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RGraphicsView);
                
            //}
          }
          else {
            qWarning("RGraphicsView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RGraphicsView.js: No constructor found for class RGraphicsView");
            
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

      //RGraphicsView.prototype = new RGraphicsView_BaseJs(engine);
      //RGraphicsView.prototype = new RGraphicsView_Wrapper(engine);
      RGraphicsView.prototype = new Object();

      RGraphicsView.prototype.toString = function() {
          //return "RGraphicsView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsView [JS]";
        };
      RGraphicsView.getObjectType = function() {
        return RJSType_RGraphicsView.getIdStatic();
      };

      RGraphicsView.prototype.getObjectType = function() {
        return RJSType_RGraphicsView.getIdStatic();
      };

      RGraphicsView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsView.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ColorMode
RGraphicsView.FullColor = RGraphicsView_Wrapper.FullColor;
RGraphicsView.GrayScale = RGraphicsView_Wrapper.GrayScale;
RGraphicsView.BlackWhite = RGraphicsView_Wrapper.BlackWhite;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      