
      // auto generated
      //var self;

      // class constructor:
      function RSnapReference() {
        

        // should be RSnapReference_BaseJs.call(this, engine):
        //RSnapReference.prototype = new RSnapReference_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapReference.getIdStatic()))) {

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
            qWarning("RSnapReference.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapReference_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapReference);
  }

  
  else {
    
        print("RSnapReference(): wrong number / type of arguments");
      
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

      //RSnapReference.prototype = new RSnapReference_BaseJs(engine);
      //RSnapReference.prototype = new RSnapReference_Wrapper(engine);
      RSnapReference.prototype = new Object();

      RSnapReference.prototype.toString = function() {
          //return "RSnapReference [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapReference [JS]";
        };
      RSnapReference.getObjectType = function() {
        return RJSType_RSnapReference.getIdStatic();
      };

      RSnapReference.prototype.getObjectType = function() {
        return RJSType_RSnapReference.getIdStatic();
      };

      RSnapReference.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapReference.getIdStatic()) {
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
RSnapReference.Unknown = RSnapReference_Wrapper.Unknown;
RSnapReference.Free = RSnapReference_Wrapper.Free;
RSnapReference.Grid = RSnapReference_Wrapper.Grid;
RSnapReference.Endpoint = RSnapReference_Wrapper.Endpoint;
RSnapReference.OnEntity = RSnapReference_Wrapper.OnEntity;
RSnapReference.Center = RSnapReference_Wrapper.Center;
RSnapReference.Middle = RSnapReference_Wrapper.Middle;
RSnapReference.Distance = RSnapReference_Wrapper.Distance;
RSnapReference.Intersection = RSnapReference_Wrapper.Intersection;
RSnapReference.IntersectionManual = RSnapReference_Wrapper.IntersectionManual;
RSnapReference.Reference = RSnapReference_Wrapper.Reference;
RSnapReference.Perpendicular = RSnapReference_Wrapper.Perpendicular;
RSnapReference.Tangential = RSnapReference_Wrapper.Tangential;
RSnapReference.Coordinate = RSnapReference_Wrapper.Coordinate;
RSnapReference.CoordinatePolar = RSnapReference_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapReference.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapReference.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapReference);
  }

  
  else {
    
        print("RSnapReference.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapReference.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapReference.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapReference);
  }

  
  else {
    
        print("RSnapReference.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapReference.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapReference.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapReference.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapReference.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapReference.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapReference.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapReference.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapReference.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapReference.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapReference.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapReference.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapReference.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapReference.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      