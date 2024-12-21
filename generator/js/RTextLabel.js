
      // auto generated
      //var self;

      // class constructor:
      function RTextLabel() {
        

        // should be RTextLabel_BaseJs.call(this, engine):
        //RTextLabel.prototype = new RTextLabel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextLabel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextLabel);
            //}
          }
          else {
            qWarning("RTextLabel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RTextLabel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextLabel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTextLabel_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextLabel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel(): wrong number / type of arguments");
      
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

      //RTextLabel.prototype = new RTextLabel_BaseJs(engine);
      //RTextLabel.prototype = new RTextLabel_Wrapper(engine);
      RTextLabel.prototype = new Object();

      RTextLabel.prototype.toString = function() {
          //return "RTextLabel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextLabel [JS]";
        };
      RTextLabel.getObjectType = function() {
        return RJSType_RTextLabel.getIdStatic();
      };

      RTextLabel.prototype.getObjectType = function() {
        return RJSType_RTextLabel.getIdStatic();
      };

      RTextLabel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextLabel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPoint.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTextLabel.Unknown = RTextLabel_Wrapper.Unknown;
RTextLabel.Point = RTextLabel_Wrapper.Point;
RTextLabel.Line = RTextLabel_Wrapper.Line;
RTextLabel.Arc = RTextLabel_Wrapper.Arc;
RTextLabel.Circle = RTextLabel_Wrapper.Circle;
RTextLabel.Ellipse = RTextLabel_Wrapper.Ellipse;
RTextLabel.Polyline = RTextLabel_Wrapper.Polyline;
RTextLabel.Spline = RTextLabel_Wrapper.Spline;
RTextLabel.Triangle = RTextLabel_Wrapper.Triangle;
RTextLabel.XLine = RTextLabel_Wrapper.XLine;
RTextLabel.Ray = RTextLabel_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RTextLabel.isPointShape = function() 
          
        {
          //print("JS: RTextLabel.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isLineShape = function() 
          
        {
          //print("JS: RTextLabel.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isArcShape = function() 
          
        {
          //print("JS: RTextLabel.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isCircleShape = function() 
          
        {
          //print("JS: RTextLabel.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isEllipseShape = function() 
          
        {
          //print("JS: RTextLabel.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isFullEllipseShape = function() 
          
        {
          //print("JS: RTextLabel.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isPolylineShape = function() 
          
        {
          //print("JS: RTextLabel.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isSplineShape = function() 
          
        {
          //print("JS: RTextLabel.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isTriangleShape = function() 
          
        {
          //print("JS: RTextLabel.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isXLineShape = function() 
          
        {
          //print("JS: RTextLabel.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.isRayShape = function() 
          
        {
          //print("JS: RTextLabel.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getPolylines = function() 
          
        {
          //print("JS: RTextLabel.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getOrderedShapes = function() 
          
        {
          //print("JS: RTextLabel.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsES = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RTextLabel.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getOffsetLines = function() 
          
        {
          //print("JS: RTextLabel.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getOffsetArcs = function() 
          
        {
          //print("JS: RTextLabel.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getReversedShapeList = function() 
          
        {
          //print("JS: RTextLabel.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.trim = function() 
          
        {
          //print("JS: RTextLabel.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.roundCorners = function() 
          
        {
          //print("JS: RTextLabel.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.roundShapes = function() 
          
        {
          //print("JS: RTextLabel.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.xLineToRay = function() 
          
        {
          //print("JS: RTextLabel.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.rayToLine = function() 
          
        {
          //print("JS: RTextLabel.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.scaleArc = function() 
          
        {
          //print("JS: RTextLabel.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RTextLabel.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextLabel.getErrorCode = function() 
          
        {
          //print("JS: RTextLabel.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextLabel_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextLabel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextLabel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    