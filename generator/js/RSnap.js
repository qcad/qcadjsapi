
      // auto generated
      //var self;

      // class constructor:
      function RSnap() {
        

        // should be RSnap_BaseJs.call(this, engine):
        //RSnap.prototype = new RSnap_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnap.getIdStatic()))) {

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
            qWarning("RSnap.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnap_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnap);
  }

  
  else {
    
        print("RSnap(): wrong number / type of arguments");
      
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

      //RSnap.prototype = new RSnap_BaseJs(engine);
      //RSnap.prototype = new RSnap_Wrapper(engine);
      RSnap.prototype = new Object();

      RSnap.prototype.toString = function() {
          //return "RSnap [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnap [JS]";
        };
      RSnap.getObjectType = function() {
        return RJSType_RSnap.getIdStatic();
      };

      RSnap.prototype.getObjectType = function() {
        return RJSType_RSnap.getIdStatic();
      };

      RSnap.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnap.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnap.Unknown = RSnap_Wrapper.Unknown;
RSnap.Free = RSnap_Wrapper.Free;
RSnap.Grid = RSnap_Wrapper.Grid;
RSnap.Endpoint = RSnap_Wrapper.Endpoint;
RSnap.OnEntity = RSnap_Wrapper.OnEntity;
RSnap.Center = RSnap_Wrapper.Center;
RSnap.Middle = RSnap_Wrapper.Middle;
RSnap.Distance = RSnap_Wrapper.Distance;
RSnap.Intersection = RSnap_Wrapper.Intersection;
RSnap.IntersectionManual = RSnap_Wrapper.IntersectionManual;
RSnap.Reference = RSnap_Wrapper.Reference;
RSnap.Perpendicular = RSnap_Wrapper.Perpendicular;
RSnap.Tangential = RSnap_Wrapper.Tangential;
RSnap.Coordinate = RSnap_Wrapper.Coordinate;
RSnap.CoordinatePolar = RSnap_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnap.prototype.snap = function() 
        
      {
        //print("JS: RSnap.prototype.snap");
        
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.snap(
                // call highest level JS implementation:
                //return this.snapBase(
                
                    return this.__PROXY__.snapSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSnap);
  }

  
  else {
    
        print("RSnap.snap(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnap.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnap.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnap);
  }

  
  else {
    
        print("RSnap.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnap.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnap.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnap);
  }

  
  else {
    
        print("RSnap.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnap.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnap.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnap.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnap.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnap.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnap.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnap.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnap.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnap.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnap.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnap.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnap.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnap.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnap.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnap.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnap.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnap.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnap.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnap.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      