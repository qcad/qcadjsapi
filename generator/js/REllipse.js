
      // auto generated
      //var self;

      // class constructor:
      function REllipse() {
        

        // should be REllipse_BaseJs.call(this, engine):
        //REllipse.prototype = new REllipse_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REllipse.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REllipse);
            //}
          }
          else {
            qWarning("REllipse.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 6) {
    
            self = this;
            wrapper = new REllipse_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipse);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new REllipse_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipse);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse(): wrong number / type of arguments");
      
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

      //REllipse.prototype = new REllipse_BaseJs(engine);
      //REllipse.prototype = new REllipse_Wrapper(engine);
      REllipse.prototype = new Object();

      REllipse.prototype.toString = function() {
          //return "REllipse [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REllipse [JS]";
        };
      REllipse.getObjectType = function() {
        return RJSType_REllipse.getIdStatic();
      };

      REllipse.prototype.getObjectType = function() {
        return RJSType_REllipse.getIdStatic();
      };

      REllipse.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REllipse.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
REllipse.Unknown = REllipse_Wrapper.Unknown;
REllipse.Point = REllipse_Wrapper.Point;
REllipse.Line = REllipse_Wrapper.Line;
REllipse.Arc = REllipse_Wrapper.Arc;
REllipse.Circle = REllipse_Wrapper.Circle;
REllipse.Ellipse = REllipse_Wrapper.Ellipse;
REllipse.Polyline = REllipse_Wrapper.Polyline;
REllipse.Spline = REllipse_Wrapper.Spline;
REllipse.Triangle = REllipse_Wrapper.Triangle;
REllipse.XLine = REllipse_Wrapper.XLine;
REllipse.Ray = REllipse_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        REllipse.isPointShape = function() 
          
        {
          //print("JS: REllipse.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isLineShape = function() 
          
        {
          //print("JS: REllipse.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isArcShape = function() 
          
        {
          //print("JS: REllipse.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isCircleShape = function() 
          
        {
          //print("JS: REllipse.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isEllipseShape = function() 
          
        {
          //print("JS: REllipse.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isFullEllipseShape = function() 
          
        {
          //print("JS: REllipse.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isPolylineShape = function() 
          
        {
          //print("JS: REllipse.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isSplineShape = function() 
          
        {
          //print("JS: REllipse.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isTriangleShape = function() 
          
        {
          //print("JS: REllipse.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isXLineShape = function() 
          
        {
          //print("JS: REllipse.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.isRayShape = function() 
          
        {
          //print("JS: REllipse.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getOrderedShapes = function() 
          
        {
          //print("JS: REllipse.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsLL = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsLA = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsLC = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsLE = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsLT = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsLS = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsLX = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsAA = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsAC = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsAE = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsAT = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsAS = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsAX = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsCC = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsCE = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsCS = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsCX = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsEE = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsES = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsEX = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsSX = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsSS = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getIntersectionPointsXX = function() 
          
        {
          //print("JS: REllipse.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getOffsetLines = function() 
          
        {
          //print("JS: REllipse.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getOffsetArcs = function() 
          
        {
          //print("JS: REllipse.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getReversedShapeList = function() 
          
        {
          //print("JS: REllipse.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.trim = function() 
          
        {
          //print("JS: REllipse.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.roundCorners = function() 
          
        {
          //print("JS: REllipse.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.roundShapes = function() 
          
        {
          //print("JS: REllipse.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.xLineToRay = function() 
          
        {
          //print("JS: REllipse.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.rayToLine = function() 
          
        {
          //print("JS: REllipse.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.scaleArc = function() 
          
        {
          //print("JS: REllipse.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: REllipse.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.getErrorCode = function() 
          
        {
          //print("JS: REllipse.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.createInscribed = function() 
          
        {
          //print("JS: REllipse.createInscribed");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.createInscribed(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.createInscribed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.hasProxy = function() 
          
        {
          //print("JS: REllipse.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REllipse.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REllipse.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    