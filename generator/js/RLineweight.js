
      // auto generated
      //var self;

      // class constructor:
      function RLineweight() {
        

        // should be RLineweight_BaseJs.call(this, engine):
        //RLineweight.prototype = new RLineweight_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLineweight.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLineweight);
            //}
          }
          else {
            qWarning("RLineweight.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLineweight_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLineweight);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineweight);
  }

  
  else {
    
        print("RLineweight(): wrong number / type of arguments");
      
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

      //RLineweight.prototype = new RLineweight_BaseJs(engine);
      //RLineweight.prototype = new RLineweight_Wrapper(engine);
      RLineweight.prototype = new Object();

      RLineweight.prototype.toString = function() {
          //return "RLineweight [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLineweight [JS]";
        };
      RLineweight.getObjectType = function() {
        return RJSType_RLineweight.getIdStatic();
      };

      RLineweight.prototype.getObjectType = function() {
        return RJSType_RLineweight.getIdStatic();
      };

      RLineweight.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLineweight.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Lineweight
RLineweight.Weight000 = RLineweight_Wrapper.Weight000;
RLineweight.Weight005 = RLineweight_Wrapper.Weight005;
RLineweight.Weight009 = RLineweight_Wrapper.Weight009;
RLineweight.Weight013 = RLineweight_Wrapper.Weight013;
RLineweight.Weight015 = RLineweight_Wrapper.Weight015;
RLineweight.Weight018 = RLineweight_Wrapper.Weight018;
RLineweight.Weight020 = RLineweight_Wrapper.Weight020;
RLineweight.Weight025 = RLineweight_Wrapper.Weight025;
RLineweight.Weight030 = RLineweight_Wrapper.Weight030;
RLineweight.Weight035 = RLineweight_Wrapper.Weight035;
RLineweight.Weight040 = RLineweight_Wrapper.Weight040;
RLineweight.Weight050 = RLineweight_Wrapper.Weight050;
RLineweight.Weight053 = RLineweight_Wrapper.Weight053;
RLineweight.Weight060 = RLineweight_Wrapper.Weight060;
RLineweight.Weight070 = RLineweight_Wrapper.Weight070;
RLineweight.Weight080 = RLineweight_Wrapper.Weight080;
RLineweight.Weight090 = RLineweight_Wrapper.Weight090;
RLineweight.Weight100 = RLineweight_Wrapper.Weight100;
RLineweight.Weight106 = RLineweight_Wrapper.Weight106;
RLineweight.Weight120 = RLineweight_Wrapper.Weight120;
RLineweight.Weight140 = RLineweight_Wrapper.Weight140;
RLineweight.Weight158 = RLineweight_Wrapper.Weight158;
RLineweight.Weight200 = RLineweight_Wrapper.Weight200;
RLineweight.Weight211 = RLineweight_Wrapper.Weight211;
RLineweight.WeightByLayer = RLineweight_Wrapper.WeightByLayer;
RLineweight.WeightByBlock = RLineweight_Wrapper.WeightByBlock;
RLineweight.WeightByLwDefault = RLineweight_Wrapper.WeightByLwDefault;
RLineweight.WeightInvalid = RLineweight_Wrapper.WeightInvalid;


      // functions:
      

      // static functions:
      

        // static function 
        RLineweight.getIcon = function() 
          
        {
          //print("JS: RLineweight.getIcon");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RLineweight_WrapperSingletonInstance.getIcon(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLineweight);
  }

  
  else {
    
        print("RLineweight.getIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineweight.getName = function() 
          
        {
          //print("JS: RLineweight.getName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLineweight_WrapperSingletonInstance.getName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLineweight);
  }

  
  else {
    
        print("RLineweight.getName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineweight.getClosestMatch = function() 
          
        {
          //print("JS: RLineweight.getClosestMatch");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLineweight_WrapperSingletonInstance.getClosestMatch(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLineweight);
  }

  
  else {
    
        print("RLineweight.getClosestMatch(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineweight.init = function() 
          
        {
          //print("JS: RLineweight.init");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLineweight.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLineweight.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    