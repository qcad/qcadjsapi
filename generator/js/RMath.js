
      // auto generated
      //var self;

      // class constructor:
      function RMath() {
        

        // should be RMath_BaseJs.call(this, engine):
        //RMath.prototype = new RMath_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMath.getIdStatic()))) {

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
            qWarning("RMath.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RMath_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath(): wrong number / type of arguments");
      
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

      //RMath.prototype = new RMath_BaseJs(engine);
      //RMath.prototype = new RMath_Wrapper(engine);
      RMath.prototype = new Object();


      RMath.prototype.toString = function() {
          //return "RMath [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMath [JS]";
        };
      RMath.getObjectType = function() {
        return RJSType_RMath.getIdStatic();
      };

      RMath.prototype.getObjectType = function() {
        return RJSType_RMath.getIdStatic();
      };

      RMath.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMath.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RMath.prototype.init = function(...args) 
          
        {
          //print("JS: RMath.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
        
        // function 
        RMath.prototype.uninit = function(...args) 
          
        {
          //print("JS: RMath.prototype.uninit");
          
              return this.__PROXY__.uninit(...args);
            
        };
        
        // function 
        RMath.prototype.mround = function(...args) 
          
        {
          //print("JS: RMath.prototype.mround");
          
              return this.__PROXY__.mround(...args);
            
        };
        
        // function 
        RMath.prototype.trunc = function(...args) 
          
        {
          //print("JS: RMath.prototype.trunc");
          
              return this.__PROXY__.trunc(...args);
            
        };
        
        // function 
        RMath.prototype.pow = function(...args) 
          
        {
          //print("JS: RMath.prototype.pow");
          
              return this.__PROXY__.pow(...args);
            
        };
        
        // function 
        RMath.prototype.isNormal = function(...args) 
          
        {
          //print("JS: RMath.prototype.isNormal");
          
              return this.__PROXY__.isNormal(...args);
            
        };
        
        // function 
        RMath.prototype.isNaN = function(...args) 
          
        {
          //print("JS: RMath.prototype.isNaN");
          
              return this.__PROXY__.isNaN(...args);
            
        };
        
        // function 
        RMath.prototype.isInf = function(...args) 
          
        {
          //print("JS: RMath.prototype.isInf");
          
              return this.__PROXY__.isInf(...args);
            
        };
        
        // function 
        RMath.prototype.isSane = function(...args) 
          
        {
          //print("JS: RMath.prototype.isSane");
          
              return this.__PROXY__.isSane(...args);
            
        };
        
        // function 
        RMath.prototype.eval = function(...args) 
          
        {
          //print("JS: RMath.prototype.eval");
          
              return this.__PROXY__.eval(...args);
            
        };
        
        // function 
        RMath.prototype.getError = function(...args) 
          
        {
          //print("JS: RMath.prototype.getError");
          
              return this.__PROXY__.getError(...args);
            
        };
        
        // function 
        RMath.prototype.hasError = function(...args) 
          
        {
          //print("JS: RMath.prototype.hasError");
          
              return this.__PROXY__.hasError(...args);
            
        };
        
        // function 
        RMath.prototype.angleToString = function(...args) 
          
        {
          //print("JS: RMath.prototype.angleToString");
          
              return this.__PROXY__.angleToString(...args);
            
        };
        
        // function 
        RMath.prototype.trimTrailingZeroes = function(...args) 
          
        {
          //print("JS: RMath.prototype.trimTrailingZeroes");
          
              return this.__PROXY__.trimTrailingZeroes(...args);
            
        };
        
        // function 
        RMath.prototype.rad2deg = function(...args) 
          
        {
          //print("JS: RMath.prototype.rad2deg");
          
              return this.__PROXY__.rad2deg(...args);
            
        };
        
        // function 
        RMath.prototype.deg2rad = function(...args) 
          
        {
          //print("JS: RMath.prototype.deg2rad");
          
              return this.__PROXY__.deg2rad(...args);
            
        };
        
        // function 
        RMath.prototype.rad2gra = function(...args) 
          
        {
          //print("JS: RMath.prototype.rad2gra");
          
              return this.__PROXY__.rad2gra(...args);
            
        };
        
        // function 
        RMath.prototype.gra2deg = function(...args) 
          
        {
          //print("JS: RMath.prototype.gra2deg");
          
              return this.__PROXY__.gra2deg(...args);
            
        };
        
        // function 
        RMath.prototype.isBetween = function(...args) 
          
        {
          //print("JS: RMath.prototype.isBetween");
          
              return this.__PROXY__.isBetween(...args);
            
        };
        
        // function 
        RMath.prototype.getGcd = function(...args) 
          
        {
          //print("JS: RMath.prototype.getGcd");
          
              return this.__PROXY__.getGcd(...args);
            
        };
        
        // function 
        RMath.prototype.isAngleBetween = function(...args) 
          
        {
          //print("JS: RMath.prototype.isAngleBetween");
          
              return this.__PROXY__.isAngleBetween(...args);
            
        };
        
        // function 
        RMath.prototype.getNormalizedAngle = function(...args) 
          
        {
          //print("JS: RMath.prototype.getNormalizedAngle");
          
              return this.__PROXY__.getNormalizedAngle(...args);
            
        };
        
        // function 
        RMath.prototype.getRelativeAngle = function(...args) 
          
        {
          //print("JS: RMath.prototype.getRelativeAngle");
          
              return this.__PROXY__.getRelativeAngle(...args);
            
        };
        
        // function 
        RMath.prototype.getAngleDifference = function(...args) 
          
        {
          //print("JS: RMath.prototype.getAngleDifference");
          
              return this.__PROXY__.getAngleDifference(...args);
            
        };
        
        // function 
        RMath.prototype.getAngleDifference180 = function(...args) 
          
        {
          //print("JS: RMath.prototype.getAngleDifference180");
          
              return this.__PROXY__.getAngleDifference180(...args);
            
        };
        
        // function 
        RMath.prototype.makeAngleReadable = function(...args) 
          
        {
          //print("JS: RMath.prototype.makeAngleReadable");
          
              return this.__PROXY__.makeAngleReadable(...args);
            
        };
        
        // function 
        RMath.prototype.isAngleReadable = function(...args) 
          
        {
          //print("JS: RMath.prototype.isAngleReadable");
          
              return this.__PROXY__.isAngleReadable(...args);
            
        };
        
        // function 
        RMath.prototype.isSameDirection = function(...args) 
          
        {
          //print("JS: RMath.prototype.isSameDirection");
          
              return this.__PROXY__.isSameDirection(...args);
            
        };
        
        // function 
        RMath.prototype.absmod = function(...args) 
          
        {
          //print("JS: RMath.prototype.absmod");
          
              return this.__PROXY__.absmod(...args);
            
        };
        
        // function 
        RMath.prototype.toFractionString = function(...args) 
          
        {
          //print("JS: RMath.prototype.toFractionString");
          
              return this.__PROXY__.toFractionString(...args);
            
        };
        
        // function 
        RMath.prototype.toFraction = function(...args) 
          
        {
          //print("JS: RMath.prototype.toFraction");
          
              return this.__PROXY__.toFraction(...args);
            
        };
        
        // function 
        RMath.prototype.simplify = function(...args) 
          
        {
          //print("JS: RMath.prototype.simplify");
          
              return this.__PROXY__.simplify(...args);
            
        };
        
        // function 
        RMath.prototype.fuzzyCompare = function(...args) 
          
        {
          //print("JS: RMath.prototype.fuzzyCompare");
          
              return this.__PROXY__.fuzzyCompare(...args);
            
        };
        
        // function 
        RMath.prototype.fuzzyAngleCompare = function(...args) 
          
        {
          //print("JS: RMath.prototype.fuzzyAngleCompare");
          
              return this.__PROXY__.fuzzyAngleCompare(...args);
            
        };
        
        // function 
        RMath.prototype.containsFuzzy = function(...args) 
          
        {
          //print("JS: RMath.prototype.containsFuzzy");
          
              return this.__PROXY__.containsFuzzy(...args);
            
        };
        
        // function 
        RMath.prototype.parseScale = function(...args) 
          
        {
          //print("JS: RMath.prototype.parseScale");
          
              return this.__PROXY__.parseScale(...args);
            
        };
        
        // function 
        RMath.prototype.parseCoordinate = function(...args) 
          
        {
          //print("JS: RMath.prototype.parseCoordinate");
          
              return this.__PROXY__.parseCoordinate(...args);
            
        };
        
        // function 
        RMath.prototype.getMd5Hash = function(...args) 
          
        {
          //print("JS: RMath.prototype.getMd5Hash");
          
              return this.__PROXY__.getMd5Hash(...args);
            
        };
        

      // static functions:
      

        // static function 
        RMath.init = function() 
          
        {
          //print("JS: RMath.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.uninit = function() 
          
        {
          //print("JS: RMath.uninit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.uninit(
                  
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.uninit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.mround = function() 
          
        {
          //print("JS: RMath.mround");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.mround(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.mround(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.trunc = function() 
          
        {
          //print("JS: RMath.trunc");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.trunc(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.trunc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.pow = function() 
          
        {
          //print("JS: RMath.pow");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.pow(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.pow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isNormal = function() 
          
        {
          //print("JS: RMath.isNormal");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isNormal(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isNormal(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isNaN = function() 
          
        {
          //print("JS: RMath.isNaN");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isNaN(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isNaN(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isInf = function() 
          
        {
          //print("JS: RMath.isInf");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isInf(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isInf(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isSane = function() 
          
        {
          //print("JS: RMath.isSane");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isSane(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isSane(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.eval = function() 
          
        {
          //print("JS: RMath.eval");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.eval(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.eval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.getError = function() 
          
        {
          //print("JS: RMath.getError");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.getError(
                  
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.getError(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.hasError = function() 
          
        {
          //print("JS: RMath.hasError");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.hasError(
                  
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.hasError(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.angleToString = function() 
          
        {
          //print("JS: RMath.angleToString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.angleToString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.angleToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.trimTrailingZeroes = function() 
          
        {
          //print("JS: RMath.trimTrailingZeroes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.trimTrailingZeroes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.trimTrailingZeroes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.rad2deg = function() 
          
        {
          //print("JS: RMath.rad2deg");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.rad2deg(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.rad2deg(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.deg2rad = function() 
          
        {
          //print("JS: RMath.deg2rad");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.deg2rad(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.deg2rad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.rad2gra = function() 
          
        {
          //print("JS: RMath.rad2gra");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.rad2gra(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.rad2gra(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.gra2deg = function() 
          
        {
          //print("JS: RMath.gra2deg");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.gra2deg(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.gra2deg(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isBetween = function() 
          
        {
          //print("JS: RMath.isBetween");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isBetween(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isBetween(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.getGcd = function() 
          
        {
          //print("JS: RMath.getGcd");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.getGcd(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.getGcd(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isAngleBetween = function() 
          
        {
          //print("JS: RMath.isAngleBetween");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isAngleBetween(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isAngleBetween(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.getNormalizedAngle = function() 
          
        {
          //print("JS: RMath.getNormalizedAngle");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.getNormalizedAngle(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.getNormalizedAngle(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.getRelativeAngle = function() 
          
        {
          //print("JS: RMath.getRelativeAngle");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.getRelativeAngle(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.getRelativeAngle(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.getAngleDifference = function() 
          
        {
          //print("JS: RMath.getAngleDifference");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.getAngleDifference(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.getAngleDifference(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.getAngleDifference180 = function() 
          
        {
          //print("JS: RMath.getAngleDifference180");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.getAngleDifference180(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.getAngleDifference180(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.makeAngleReadable = function() 
          
        {
          //print("JS: RMath.makeAngleReadable");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.makeAngleReadable(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.makeAngleReadable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isAngleReadable = function() 
          
        {
          //print("JS: RMath.isAngleReadable");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isAngleReadable(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isAngleReadable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.isSameDirection = function() 
          
        {
          //print("JS: RMath.isSameDirection");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.isSameDirection(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.isSameDirection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.absmod = function() 
          
        {
          //print("JS: RMath.absmod");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.absmod(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.absmod(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.toFractionString = function() 
          
        {
          //print("JS: RMath.toFractionString");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.toFractionString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.toFractionString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.toFraction = function() 
          
        {
          //print("JS: RMath.toFraction");
          
      if (arguments.length == 5) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.toFraction(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.toFraction(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.simplify = function() 
          
        {
          //print("JS: RMath.simplify");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.simplify(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.simplify(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.fuzzyCompare = function() 
          
        {
          //print("JS: RMath.fuzzyCompare");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.fuzzyCompare(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.fuzzyCompare(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.fuzzyAngleCompare = function() 
          
        {
          //print("JS: RMath.fuzzyAngleCompare");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.fuzzyAngleCompare(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.fuzzyAngleCompare(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.containsFuzzy = function() 
          
        {
          //print("JS: RMath.containsFuzzy");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.containsFuzzy(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.containsFuzzy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.parseScale = function() 
          
        {
          //print("JS: RMath.parseScale");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.parseScale(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.parseScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.parseCoordinate = function() 
          
        {
          //print("JS: RMath.parseCoordinate");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.parseCoordinate(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.parseCoordinate(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMath.getMd5Hash = function() 
          
        {
          //print("JS: RMath.getMd5Hash");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMath_WrapperSingletonInstance.getMd5Hash(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMath);
  }

  
  else {
    
        print("RMath.getMd5Hash(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RMath.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMath.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMath.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMath.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMath.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMath.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      