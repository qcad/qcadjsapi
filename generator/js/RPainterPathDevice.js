
      // auto generated
      //var self;

      // class constructor:
      function RPainterPathDevice() {
        

        // should be RPainterPathDevice_BaseJs.call(this, engine):
        //RPainterPathDevice.prototype = new RPainterPathDevice_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPainterPathDevice.getIdStatic()))) {

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
            qWarning("RPainterPathDevice.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPainterPathDevice_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPainterPathDevice);
  }

  
  else {
    
        print("RPainterPathDevice(): wrong number / type of arguments");
      
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

      //RPainterPathDevice.prototype = new RPainterPathDevice_BaseJs(engine);
      //RPainterPathDevice.prototype = new RPainterPathDevice_Wrapper(engine);
      RPainterPathDevice.prototype = new Object();

      RPainterPathDevice.prototype.toString = function() {
          //return "RPainterPathDevice [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPainterPathDevice [JS]";
        };
      RPainterPathDevice.getObjectType = function() {
        return RJSType_RPainterPathDevice.getIdStatic();
      };

      RPainterPathDevice.prototype.getObjectType = function() {
        return RJSType_RPainterPathDevice.getIdStatic();
      };

      RPainterPathDevice.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPainterPathDevice.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPainterPathDevice.prototype.devType = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.devType");
          return this.__PROXY__.devType(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.paintingActive");
          return this.__PROXY__.paintingActive(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.width = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.height = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.widthMM = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.widthMM");
          return this.__PROXY__.widthMM(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.heightMM = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.heightMM");
          return this.__PROXY__.heightMM(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.logicalDpiX");
          return this.__PROXY__.logicalDpiX(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.logicalDpiY");
          return this.__PROXY__.logicalDpiY(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.physicalDpiX");
          return this.__PROXY__.physicalDpiX(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.physicalDpiY");
          return this.__PROXY__.physicalDpiY(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.devicePixelRatio");
          return this.__PROXY__.devicePixelRatio(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.devicePixelRatioF");
          return this.__PROXY__.devicePixelRatioF(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.colorCount = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.colorCount");
          return this.__PROXY__.colorCount(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.depth = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.depth");
          return this.__PROXY__.depth(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.metric = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.metric");
          return this.__PROXY__.metric(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.initPainter");
          return this.__PROXY__.initPainter(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.redirected = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.redirected");
          return this.__PROXY__.redirected(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.sharedPainter");
          return this.__PROXY__.sharedPainter(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.qt_paint_device_metric");
          return this.__PROXY__.qt_paint_device_metric(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.setStrokePolygon = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.setStrokePolygon");
          return this.__PROXY__.setStrokePolygon(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.setSize = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.setSize");
          return this.__PROXY__.setSize(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.setDpi = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.setDpi");
          return this.__PROXY__.setDpi(...args);
        };
    
        // function 
        RPainterPathDevice.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: RPainterPathDevice.prototype.paintEngine");
          return this.__PROXY__.paintEngine(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPainterPathDevice.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPainterPathDevice.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPainterPathDevice.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      