
      // auto generated
      //var self;

      // class constructor:
      function RCircle() {
        

        // should be RCircle_BaseJs.call(this, engine):
        //RCircle.prototype = new RCircle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCircle.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCircle);
            //}
          }
          else {
            qWarning("RCircle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle(): wrong number / type of arguments");
      
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

      //RCircle.prototype = new RCircle_BaseJs(engine);
      //RCircle.prototype = new RCircle_Wrapper(engine);
      RCircle.prototype = new Object();

      RCircle.prototype.toString = function() {
          //return "RCircle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCircle [JS]";
        };
      RCircle.getObjectType = function() {
        return RJSType_RCircle.getIdStatic();
      };

      RCircle.prototype.getObjectType = function() {
        return RJSType_RCircle.getIdStatic();
      };

      RCircle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCircle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RCircle.Unknown = RCircle_Wrapper.Unknown;
RCircle.Point = RCircle_Wrapper.Point;
RCircle.Line = RCircle_Wrapper.Line;
RCircle.Arc = RCircle_Wrapper.Arc;
RCircle.Circle = RCircle_Wrapper.Circle;
RCircle.Ellipse = RCircle_Wrapper.Ellipse;
RCircle.Polyline = RCircle_Wrapper.Polyline;
RCircle.Spline = RCircle_Wrapper.Spline;
RCircle.Triangle = RCircle_Wrapper.Triangle;
RCircle.XLine = RCircle_Wrapper.XLine;
RCircle.Ray = RCircle_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RCircle.isPointShape = function() 
          
        {
          //print("JS: RCircle.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isLineShape = function() 
          
        {
          //print("JS: RCircle.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isArcShape = function() 
          
        {
          //print("JS: RCircle.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isCircleShape = function() 
          
        {
          //print("JS: RCircle.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isEllipseShape = function() 
          
        {
          //print("JS: RCircle.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isFullEllipseShape = function() 
          
        {
          //print("JS: RCircle.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isPolylineShape = function() 
          
        {
          //print("JS: RCircle.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isSplineShape = function() 
          
        {
          //print("JS: RCircle.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isTriangleShape = function() 
          
        {
          //print("JS: RCircle.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isXLineShape = function() 
          
        {
          //print("JS: RCircle.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.isRayShape = function() 
          
        {
          //print("JS: RCircle.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getPolylines = function() 
          
        {
          //print("JS: RCircle.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getOrderedShapes = function() 
          
        {
          //print("JS: RCircle.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsES = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RCircle.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getOffsetLines = function() 
          
        {
          //print("JS: RCircle.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getOffsetArcs = function() 
          
        {
          //print("JS: RCircle.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getReversedShapeList = function() 
          
        {
          //print("JS: RCircle.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.trim = function() 
          
        {
          //print("JS: RCircle.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.roundCorners = function() 
          
        {
          //print("JS: RCircle.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.roundShapes = function() 
          
        {
          //print("JS: RCircle.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.xLineToRay = function() 
          
        {
          //print("JS: RCircle.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.rayToLine = function() 
          
        {
          //print("JS: RCircle.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.scaleArc = function() 
          
        {
          //print("JS: RCircle.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RCircle.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.getErrorCode = function() 
          
        {
          //print("JS: RCircle.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.createFrom2Points = function() 
          
        {
          //print("JS: RCircle.createFrom2Points");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.createFrom2Points(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.createFrom2Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.createFrom3Points = function() 
          
        {
          //print("JS: RCircle.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCircle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCircle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    