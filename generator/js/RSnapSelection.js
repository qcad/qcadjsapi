
      // auto generated
      //var self;

      // class constructor:
      function RSnapSelection() {
        

        // should be RSnapSelection_BaseJs.call(this, engine):
        //RSnapSelection.prototype = new RSnapSelection_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapSelection.getIdStatic()))) {

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
            qWarning("RSnapSelection.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapSelection_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapSelection);
  }

  
  else {
    
        print("RSnapSelection(): wrong number / type of arguments");
      
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

      //RSnapSelection.prototype = new RSnapSelection_BaseJs(engine);
      //RSnapSelection.prototype = new RSnapSelection_Wrapper(engine);
      RSnapSelection.prototype = new Object();

      RSnapSelection.prototype.toString = function() {
          //return "RSnapSelection [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapSelection [JS]";
        };
      RSnapSelection.getObjectType = function() {
        return RJSType_RSnapSelection.getIdStatic();
      };

      RSnapSelection.prototype.getObjectType = function() {
        return RJSType_RSnapSelection.getIdStatic();
      };

      RSnapSelection.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapSelection.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapSelection.Unknown = RSnapSelection_Wrapper.Unknown;
RSnapSelection.Free = RSnapSelection_Wrapper.Free;
RSnapSelection.Grid = RSnapSelection_Wrapper.Grid;
RSnapSelection.Endpoint = RSnapSelection_Wrapper.Endpoint;
RSnapSelection.OnEntity = RSnapSelection_Wrapper.OnEntity;
RSnapSelection.Center = RSnapSelection_Wrapper.Center;
RSnapSelection.Middle = RSnapSelection_Wrapper.Middle;
RSnapSelection.Distance = RSnapSelection_Wrapper.Distance;
RSnapSelection.Intersection = RSnapSelection_Wrapper.Intersection;
RSnapSelection.IntersectionManual = RSnapSelection_Wrapper.IntersectionManual;
RSnapSelection.Reference = RSnapSelection_Wrapper.Reference;
RSnapSelection.Perpendicular = RSnapSelection_Wrapper.Perpendicular;
RSnapSelection.Tangential = RSnapSelection_Wrapper.Tangential;
RSnapSelection.Coordinate = RSnapSelection_Wrapper.Coordinate;
RSnapSelection.CoordinatePolar = RSnapSelection_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapSelection.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapSelection.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapSelection);
  }

  
  else {
    
        print("RSnapSelection.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapSelection.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapSelection.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapSelection);
  }

  
  else {
    
        print("RSnapSelection.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapSelection.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapSelection.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapSelection.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapSelection.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapSelection.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapSelection.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapSelection.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapSelection.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapSelection.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapSelection.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapSelection.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapSelection.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapSelection.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      