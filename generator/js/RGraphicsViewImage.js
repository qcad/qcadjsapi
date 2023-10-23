
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsViewImage() {
        

        // should be RGraphicsViewImage_BaseJs.call(this, engine):
        //RGraphicsViewImage.prototype = new RGraphicsViewImage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsViewImage.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RGraphicsViewImage);
            //}
          }
          else {
            qWarning("RGraphicsViewImage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RGraphicsViewImage_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RGraphicsViewImage);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsViewImage);
  }

  
  else {
    
        print("RGraphicsViewImage(): wrong number / type of arguments");
      
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
            
    this["updateSnapInfo(RGraphicsViewWorker*,RSnap*,RSnapRestriction*)"] = Object.getPrototypeOf(this).updateSnapInfo;
  
    this["updateTextLabel(RGraphicsViewWorker*,RTextLabel)"] = Object.getPrototypeOf(this).updateTextLabel;
  
          }
        }
      }

      //RGraphicsViewImage.prototype = new RGraphicsViewImage_BaseJs(engine);
      //RGraphicsViewImage.prototype = new RGraphicsViewImage_Wrapper(engine);
      RGraphicsViewImage.prototype = new Object();

      RGraphicsViewImage.prototype.toString = function() {
          //return "RGraphicsViewImage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsViewImage [JS]";
        };
      RGraphicsViewImage.getObjectType = function() {
        return RJSType_RGraphicsViewImage.getIdStatic();
      };

      RGraphicsViewImage.prototype.getObjectType = function() {
        return RJSType_RGraphicsViewImage.getIdStatic();
      };

      RGraphicsViewImage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsViewImage.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RGraphicsView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ColorMode
RGraphicsViewImage.FullColor = RGraphicsViewImage_Wrapper.FullColor;
RGraphicsViewImage.GrayScale = RGraphicsViewImage_Wrapper.GrayScale;
RGraphicsViewImage.BlackWhite = RGraphicsViewImage_Wrapper.BlackWhite;


      // functions:
      

      // static functions:
      

        // static function 
        RGraphicsViewImage.tr = function() 
          
        {
          //print("JS: RGraphicsViewImage.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RGraphicsViewImage_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RGraphicsViewImage);
  }

  
  else {
    
        print("RGraphicsViewImage.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsViewImage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsViewImage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    