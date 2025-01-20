
      // auto generated
      //var self;

      // class constructor:
      function RSnapTangential() {
        

        // should be RSnapTangential_BaseJs.call(this, engine):
        //RSnapTangential.prototype = new RSnapTangential_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapTangential.getIdStatic()))) {

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
            qWarning("RSnapTangential.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapTangential_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapTangential);
  }

  
  else {
    
        print("RSnapTangential(): wrong number / type of arguments");
      
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

      //RSnapTangential.prototype = new RSnapTangential_BaseJs(engine);
      //RSnapTangential.prototype = new RSnapTangential_Wrapper(engine);
      RSnapTangential.prototype = new Object();

      RSnapTangential.prototype.toString = function() {
          //return "RSnapTangential [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapTangential [JS]";
        };
      RSnapTangential.getObjectType = function() {
        return RJSType_RSnapTangential.getIdStatic();
      };

      RSnapTangential.prototype.getObjectType = function() {
        return RJSType_RSnapTangential.getIdStatic();
      };

      RSnapTangential.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapTangential.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSnapEntityBase.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapTangential.Unknown = RSnapTangential_Wrapper.Unknown;
RSnapTangential.Free = RSnapTangential_Wrapper.Free;
RSnapTangential.Grid = RSnapTangential_Wrapper.Grid;
RSnapTangential.Endpoint = RSnapTangential_Wrapper.Endpoint;
RSnapTangential.OnEntity = RSnapTangential_Wrapper.OnEntity;
RSnapTangential.Center = RSnapTangential_Wrapper.Center;
RSnapTangential.Middle = RSnapTangential_Wrapper.Middle;
RSnapTangential.Distance = RSnapTangential_Wrapper.Distance;
RSnapTangential.Intersection = RSnapTangential_Wrapper.Intersection;
RSnapTangential.IntersectionManual = RSnapTangential_Wrapper.IntersectionManual;
RSnapTangential.Reference = RSnapTangential_Wrapper.Reference;
RSnapTangential.Perpendicular = RSnapTangential_Wrapper.Perpendicular;
RSnapTangential.Tangential = RSnapTangential_Wrapper.Tangential;
RSnapTangential.Coordinate = RSnapTangential_Wrapper.Coordinate;
RSnapTangential.CoordinatePolar = RSnapTangential_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapTangential.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapTangential.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapTangential);
  }

  
  else {
    
        print("RSnapTangential.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapTangential.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapTangential.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapTangential);
  }

  
  else {
    
        print("RSnapTangential.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapTangential.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapTangential.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapTangential.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapTangential.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapTangential.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapTangential.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapTangential.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapTangential.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapTangential.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapTangential.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapTangential.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapTangential.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapTangential.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      