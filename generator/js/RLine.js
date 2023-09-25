
      // auto generated
      //var self;

      // class constructor:
      function RLine() {
        

        // should be RLine_BaseJs.call(this, engine):
        //RLine.prototype = new RLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLine);
            //}
          }
          else {
            qWarning("RLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine(): wrong number / type of arguments");
      
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

      //RLine.prototype = new RLine_BaseJs(engine);
      //RLine.prototype = new RLine_Wrapper(engine);
      RLine.prototype = new Object();

      RLine.prototype.toString = function() {
          //return "RLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLine [JS]";
        };
      RLine.getObjectType = function() {
        return RJSType_RLine.getIdStatic();
      };

      RLine.prototype.getObjectType = function() {
        return RJSType_RLine.getIdStatic();
      };

      RLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RLine.Unknown = RLine_Wrapper.Unknown;
RLine.Point = RLine_Wrapper.Point;
RLine.Line = RLine_Wrapper.Line;
RLine.Arc = RLine_Wrapper.Arc;
RLine.Circle = RLine_Wrapper.Circle;
RLine.Ellipse = RLine_Wrapper.Ellipse;
RLine.Polyline = RLine_Wrapper.Polyline;
RLine.Spline = RLine_Wrapper.Spline;
RLine.Triangle = RLine_Wrapper.Triangle;
RLine.XLine = RLine_Wrapper.XLine;
RLine.Ray = RLine_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RLine.isPointShape = function() 
          
        {
          //print("JS: RLine.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isLineShape = function() 
          
        {
          //print("JS: RLine.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isArcShape = function() 
          
        {
          //print("JS: RLine.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isCircleShape = function() 
          
        {
          //print("JS: RLine.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isEllipseShape = function() 
          
        {
          //print("JS: RLine.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isFullEllipseShape = function() 
          
        {
          //print("JS: RLine.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isPolylineShape = function() 
          
        {
          //print("JS: RLine.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isSplineShape = function() 
          
        {
          //print("JS: RLine.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isTriangleShape = function() 
          
        {
          //print("JS: RLine.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isXLineShape = function() 
          
        {
          //print("JS: RLine.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.isRayShape = function() 
          
        {
          //print("JS: RLine.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getOrderedShapes = function() 
          
        {
          //print("JS: RLine.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsES = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RLine.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getOffsetLines = function() 
          
        {
          //print("JS: RLine.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getOffsetArcs = function() 
          
        {
          //print("JS: RLine.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getReversedShapeList = function() 
          
        {
          //print("JS: RLine.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.trim = function() 
          
        {
          //print("JS: RLine.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.roundCorners = function() 
          
        {
          //print("JS: RLine.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.roundShapes = function() 
          
        {
          //print("JS: RLine.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.xLineToRay = function() 
          
        {
          //print("JS: RLine.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.rayToLine = function() 
          
        {
          //print("JS: RLine.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.scaleArc = function() 
          
        {
          //print("JS: RLine.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RLine.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLine.getErrorCode = function() 
          
        {
          //print("JS: RLine.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLine_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    