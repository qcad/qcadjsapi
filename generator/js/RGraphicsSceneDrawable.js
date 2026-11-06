
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsSceneDrawable() {
        

        // should be RGraphicsSceneDrawable_BaseJs.call(this, engine):
        //RGraphicsSceneDrawable.prototype = new RGraphicsSceneDrawable_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsSceneDrawable.getIdStatic()))) {

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
            qWarning("RGraphicsSceneDrawable.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RGraphicsSceneDrawable_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RGraphicsSceneDrawable_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RGraphicsSceneDrawable_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RGraphicsSceneDrawable_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RGraphicsSceneDrawable_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RGraphicsSceneDrawable_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else {
    
        print("RGraphicsSceneDrawable(): wrong number / type of arguments");
      
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

      //RGraphicsSceneDrawable.prototype = new RGraphicsSceneDrawable_BaseJs(engine);
      //RGraphicsSceneDrawable.prototype = new RGraphicsSceneDrawable_Wrapper(engine);
      RGraphicsSceneDrawable.prototype = new Object();


      RGraphicsSceneDrawable.prototype.toString = function() {
          //return "RGraphicsSceneDrawable [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsSceneDrawable [JS]";
        };
      RGraphicsSceneDrawable.getObjectType = function() {
        return RJSType_RGraphicsSceneDrawable.getIdStatic();
      };

      RGraphicsSceneDrawable.prototype.getObjectType = function() {
        return RJSType_RGraphicsSceneDrawable.getIdStatic();
      };

      RGraphicsSceneDrawable.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsSceneDrawable.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RGraphicsSceneDrawable.Invalid = RGraphicsSceneDrawable_Wrapper.Invalid;
RGraphicsSceneDrawable.PainterPath = RGraphicsSceneDrawable_Wrapper.PainterPath;
RGraphicsSceneDrawable.PainterPathRay = RGraphicsSceneDrawable_Wrapper.PainterPathRay;
RGraphicsSceneDrawable.PainterPathXLine = RGraphicsSceneDrawable_Wrapper.PainterPathXLine;
RGraphicsSceneDrawable.Image = RGraphicsSceneDrawable_Wrapper.Image;
RGraphicsSceneDrawable.Text = RGraphicsSceneDrawable_Wrapper.Text;
RGraphicsSceneDrawable.Transform = RGraphicsSceneDrawable_Wrapper.Transform;
RGraphicsSceneDrawable.EndTransform = RGraphicsSceneDrawable_Wrapper.EndTransform;

  // enum: Mode
RGraphicsSceneDrawable.NoMode = RGraphicsSceneDrawable_Wrapper.NoMode;
RGraphicsSceneDrawable.NoPlot = RGraphicsSceneDrawable_Wrapper.NoPlot;
RGraphicsSceneDrawable.PixelUnit = RGraphicsSceneDrawable_Wrapper.PixelUnit;
RGraphicsSceneDrawable.WorkingSet = RGraphicsSceneDrawable_Wrapper.WorkingSet;


      // functions:
      
        // function 
        RGraphicsSceneDrawable.prototype.createFromPainterPath = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.createFromPainterPath");
          
              return this.__PROXY__.createFromPainterPath(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.createFromImage = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.createFromImage");
          
              return this.__PROXY__.createFromImage(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.createFromText = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.createFromText");
          
              return this.__PROXY__.createFromText(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.createFromTransform = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.createFromTransform");
          
              return this.__PROXY__.createFromTransform(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.createEndTransform = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.createEndTransform");
          
              return this.__PROXY__.createEndTransform(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.uninit = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.uninit");
          
              return this.__PROXY__.uninit(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getType = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getType");
          
              return this.__PROXY__.getType(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.isPainterPath = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.isPainterPath");
          
              return this.__PROXY__.isPainterPath(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.isText = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.isText");
          
              return this.__PROXY__.isText(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.isImage = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.isImage");
          
              return this.__PROXY__.isImage(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.setMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.setMode");
          
              return this.__PROXY__.setMode(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getMode = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getMode");
          
              return this.__PROXY__.getMode(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.setNoPlot = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.setNoPlot");
          
              return this.__PROXY__.setNoPlot(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getNoPlot = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getNoPlot");
          
              return this.__PROXY__.getNoPlot(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.setPixelUnit");
          
              return this.__PROXY__.setPixelUnit(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getPixelUnit = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getPixelUnit");
          
              return this.__PROXY__.getPixelUnit(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.setWorkingSet");
          
              return this.__PROXY__.setWorkingSet(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.isWorkingSet");
          
              return this.__PROXY__.isWorkingSet(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getPainterPath = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getPainterPath");
          
              return this.__PROXY__.getPainterPath(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getImage = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getImage");
          
              return this.__PROXY__.getImage(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getText = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getTransform = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getTransform");
          
              return this.__PROXY__.getTransform(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getOffset = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getOffset");
          
              return this.__PROXY__.getOffset(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.setOffset = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.setOffset");
          
              return this.__PROXY__.setOffset(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.setSelected");
          
              return this.__PROXY__.setSelected(...args);
            
        };
        
        // function 
        RGraphicsSceneDrawable.prototype.setHighlighted = function(...args) 
          
        {
          //print("JS: RGraphicsSceneDrawable.prototype.setHighlighted");
          
              return this.__PROXY__.setHighlighted(...args);
            
        };
        

      // static functions:
      

        // static function 
        RGraphicsSceneDrawable.createFromPainterPath = function() 
          
        {
          //print("JS: RGraphicsSceneDrawable.createFromPainterPath");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGraphicsSceneDrawable_WrapperSingletonInstance.createFromPainterPath(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else {
    
        print("RGraphicsSceneDrawable.createFromPainterPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGraphicsSceneDrawable.createFromImage = function() 
          
        {
          //print("JS: RGraphicsSceneDrawable.createFromImage");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGraphicsSceneDrawable_WrapperSingletonInstance.createFromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else {
    
        print("RGraphicsSceneDrawable.createFromImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGraphicsSceneDrawable.createFromText = function() 
          
        {
          //print("JS: RGraphicsSceneDrawable.createFromText");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGraphicsSceneDrawable_WrapperSingletonInstance.createFromText(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else {
    
        print("RGraphicsSceneDrawable.createFromText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGraphicsSceneDrawable.createFromTransform = function() 
          
        {
          //print("JS: RGraphicsSceneDrawable.createFromTransform");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RGraphicsSceneDrawable_WrapperSingletonInstance.createFromTransform(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else {
    
        print("RGraphicsSceneDrawable.createFromTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RGraphicsSceneDrawable.createEndTransform = function() 
          
        {
          //print("JS: RGraphicsSceneDrawable.createEndTransform");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RGraphicsSceneDrawable_WrapperSingletonInstance.createEndTransform(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsSceneDrawable);
  }

  
  else {
    
        print("RGraphicsSceneDrawable.createEndTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RGraphicsSceneDrawable.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGraphicsSceneDrawable.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGraphicsSceneDrawable.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsSceneDrawable.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsSceneDrawable.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGraphicsSceneDrawable.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      