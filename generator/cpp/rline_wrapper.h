
  // Auto generated
  
    #ifndef RLINE_H_WRAPPER
    #define RLINE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RBox.h"
      
        #include "RPolyline.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RLine.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RLine_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RLine_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RLine
    // Function: isPointShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isLineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isLineShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isArcShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isArcShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isCircleShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCircleShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isEllipseShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEllipseShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isFullEllipseShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFullEllipseShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isPolylineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPolylineShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isSplineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSplineShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isTriangleShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTriangleShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isXLineShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isXLineShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isRayShape
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRayShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getPolylines
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPolylines
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getOrderedShapes
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getOrderedShapes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsLL
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsLL
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsLA
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsLA
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsLC
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsLC
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsLE
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsLE
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsLT
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsLT
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsLS
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsLS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsLX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsLX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsAA
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsAA
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsAC
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsAC
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsAE
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsAE
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsAT
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsAT
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsAS
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsAS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsAX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsAX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsCC
    // Source: RShape
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsCC
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsCE
    // Source: RShape
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsCE
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsCS
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsCS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsCX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsCX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsEE
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsEE
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsES
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsES
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsEX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsEX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsSX
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsSX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsSS
    // Source: RShape
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsSS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPointsXX
    // Source: RShape
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPointsXX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getOffsetLines
    // Source: RShape
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getOffsetLines
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getOffsetArcs
    // Source: RShape
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getOffsetArcs
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getReversedShapeList
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getReversedShapeList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: trim
    // Source: RShape
    // Static: true
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  trim
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: roundCorners
    // Source: RShape
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  roundCorners
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: roundShapes
    // Source: RShape
    // Static: true
    // Parameters: 8
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  roundShapes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    , 
  const QJSValue& 
  a7
      = QJSValue()
    , 
  const QJSValue& 
  a8
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: xLineToRay
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  xLineToRay
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: rayToLine
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rayToLine
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: scaleArc
    // Source: RShape
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scaleArc
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: ellipseToArcCircleEllipse
    // Source: RShape
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ellipseToArcCircleEllipse
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getErrorCode
    // Source: RShape
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getErrorCode
              (

                
              )
              
              ;
            
#if QT_VERSION>=0x060000

#endif


      private:
          RJSApi& handler;
          //static RLine_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RLine
    class QCADJSAPI_EXPORT 
     RLine_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     startPoint READ getStartPoint WRITE setStartPoint
  )

  Q_PROPERTY(
    
    QJSValue
     endPoint READ getEndPoint WRITE setEndPoint
  )


    private:
      // disable copy constructor:
      RLine_Wrapper(const RLine_Wrapper&);

    public:
      // initialization of RLine:
      static void init(RJSApi& handler);

      
        static RLine* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RLine:
          for (int i=0; i<basecasters_RLine.length(); i++) {
            RJSBasecaster_RLine* basecaster = basecasters_RLine[i];
            RLine* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RLine:
          if (t==RJSType_RLine::getIdStatic()) {
            return (RLine*)vp;
          }

          qWarning() << "RLine_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RLine* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RLine*: wrapper wraps NULL";
          }

          RLine* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RLine*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    Unknown = RLine::Unknown,
Point = RLine::Point,
Line = RLine::Line,
Arc = RLine::Arc,
Circle = RLine::Circle,
Ellipse = RLine::Ellipse,
Polyline = RLine::Polyline,
Spline = RLine::Spline,
Triangle = RLine::Triangle,
XLine = RLine::XLine,
Ray = RLine::Ray,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RLine_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RLine_Wrapper(RJSApi& h, RLine* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RLine_Wrapper(RJSApi& h, QSharedPointer<RLine> o);
          

      // destructor:
      
          virtual ~RLine_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RLine
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RLine_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
#if QT_VERSION>=0x060000

#endif


    // non-static functions:
    
    // Class: RLine
    // Function: cloneToSharedPointer
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneToSharedPointer
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: isInterpolated
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInterpolated
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getClosestPointOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestPointOnShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: to2D
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  to2D
              (

                
              )
              
              ;
            
    // Class: RLine
    // Function: equals
    // Source: RShape
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  equals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getIntProperties
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntProperties
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getDoubleProperties
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDoubleProperties
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getBoolProperties
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoolProperties
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getDistanceTo
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDistanceTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getMaxDistanceTo
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMaxDistanceTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: isOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isOnShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: filterOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  filterOnShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getVectorFromEndpointTo
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVectorFromEndpointTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getArcReferencePoints
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getArcReferencePoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getPointOnShape
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointOnShape
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getPointWithDistanceToStart
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointWithDistanceToStart
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getPointWithDistanceToEnd
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointWithDistanceToEnd
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getAngleAtPoint
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngleAtPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getPointAtPercent
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointAtPercent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getAngleAtPercent
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngleAtPercent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: intersectsWith
    // Source: RShape
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intersectsWith
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getIntersectionPoints
    // Source: RShape
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getSelfIntersectionPoints
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSelfIntersectionPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getDistancesFromStart
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDistancesFromStart
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: dump
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dump
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getShapeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getShapeType
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: isDirected
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDirected
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: setZ
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setZ
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getVectorProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVectorProperties
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBox
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getEndPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEndPoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getMiddlePoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMiddlePoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getCenterPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCenterPoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getPointsWithDistanceToEnd
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointsWithDistanceToEnd
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getPointCloud
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointCloud
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getAngleAt
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngleAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getVectorTo
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVectorTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getStartPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getStartPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: setStartPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStartPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getEndPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEndPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: setEndPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEndPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getMiddlePoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMiddlePoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLength
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngle
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: setLength
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: setAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAngle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: isParallel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isParallel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: isVertical
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVertical
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: isHorizontal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isHorizontal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getDirection1
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDirection1
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getDirection2
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDirection2
              (

                
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getSideOfPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSideOfPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: clipToXY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clipToXY
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: move
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  move
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rotate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: mirror
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mirror
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: flipHorizontal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipHorizontal
              (

                
              )
              
              ;
            
    // Class: RLine
    // Function: flipVertical
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipVertical
              (

                
              )
              
              ;
            
    // Class: RLine
    // Function: reverse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reverse
              (

                
              )
              
              ;
            
    // Class: RLine
    // Function: stretch
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: moveTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getTransformed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransformed
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getTrimEnd
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTrimEnd
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: trimStartPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  trimStartPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: trimEndPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  trimEndPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: getDistanceFromStart
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDistanceFromStart
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RLine
    // Function: getOffsetShapes
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getOffsetShapes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RLine
    // Function: splitAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  splitAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#if QT_VERSION>=0x060000

    // Class: RLine
    // Function: copy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  copy
              (

                
              )
              
                const
              
              ;
            
#endif

          /*
          // get wrapped object as clone:
          // used to create a QSharedPointer on the fly when needed for conversion:
          public:
           RLine* getWrappedClone() {
            RLine* w = getWrapped();
            if (w==nullptr) {
              qWarning() << "RLine::getWrappedClone: wrapped is NULL";
              handler.trace();
              return nullptr;
            }
            // return cloned object:
            return new RLine(*w);
          }
          */
        
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
              if (!spWrapped.isNull()) {
                spWrapped = nullptr;
              }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RLine::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RLine* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RLine* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        
        // get wrapped object as QSharedPointer:
        virtual QSharedPointer<RLine> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          if (wrapped!=nullptr) {
            qWarning() << "wrapper does not wrap a QSharedPointer<RLine> but a regular pointer";
            return QSharedPointer<RLine>();
          }
          return QSharedPointer<RLine>();
        }

        bool hasWrappedSp() const {
          return !spWrapped.isNull() && spWrapped.data()!=nullptr;
        }
        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
            || (!spWrapped.isNull() && spWrapped.data()!=nullptr)
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
            if (!spWrapped.isNull() && spWrapped.data()!=nullptr) {
              return (unsigned long long int)spWrapped.data();
            }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        RLine* wrapped;

        
          // wrapped object as shared pointer:
          QSharedPointer<RLine> spWrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RLine*> basecasters_RLine;

      public:
        static void registerBasecaster_RLine(RJSBasecaster_RLine* bc) {
          basecasters_RLine.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RLine_Wrapper*)

    Q_DECLARE_INTERFACE(RLine_Wrapper, "org.qcad.RLine_Wrapper")

  
  #endif
  
