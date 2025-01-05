
  // Auto generated
  
    #ifndef RATTRIBUTEDEFINITIONDATA_H_WRAPPER
    #define RATTRIBUTEDEFINITIONDATA_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RAttributeDefinitionData.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RAttributeDefinitionData_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RAttributeDefinitionData_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RAttributeDefinitionData
    // Function: getRtti
    // Source: RTextBasedData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getRtti
              (

                
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: escapeUnicode
    // Source: RTextBasedData
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  escapeUnicode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: hasProxy
    // Source: RTextBasedData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProxy
              (

                
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: toEscapedText
    // Source: RTextBasedData
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEscapedText
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
            
    // Class: RAttributeDefinitionData
    // Function: toRichText
    // Source: RTextBasedData
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toRichText
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
            

      private:
          RJSApi& handler;
          //static RAttributeDefinitionData_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RAttributeDefinitionData
    class QCADJSAPI_EXPORT 
     RAttributeDefinitionData_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RAttributeDefinitionData_Wrapper(const RAttributeDefinitionData_Wrapper&);

    public:
      // initialization of RAttributeDefinitionData:
      static void init(RJSApi& handler);

      
        static RAttributeDefinitionData* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RAttributeDefinitionData:
          for (int i=0; i<basecasters_RAttributeDefinitionData.length(); i++) {
            RJSBasecaster_RAttributeDefinitionData* basecaster = basecasters_RAttributeDefinitionData[i];
            RAttributeDefinitionData* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RAttributeDefinitionData:
          if (t==RJSType_RAttributeDefinitionData::getIdStatic()) {
            return (RAttributeDefinitionData*)vp;
          }

          qWarning() << "RAttributeDefinitionData_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RAttributeDefinitionData* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RAttributeDefinitionData*: wrapper wraps NULL";
          }

          RAttributeDefinitionData* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RAttributeDefinitionData*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum TextFlag {
    NoFlags = RAttributeDefinitionData::NoFlags,
Bold = RAttributeDefinitionData::Bold,
Italic = RAttributeDefinitionData::Italic,
Simple = RAttributeDefinitionData::Simple,
DimensionLabel = RAttributeDefinitionData::DimensionLabel,
Highlighted = RAttributeDefinitionData::Highlighted,
Backward = RAttributeDefinitionData::Backward,
UpsideDown = RAttributeDefinitionData::UpsideDown,

  };
  Q_ENUM(TextFlag)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RAttributeDefinitionData_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RAttributeDefinitionData_Wrapper(RJSApi& h, RAttributeDefinitionData* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RAttributeDefinitionData_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RAttributeDefinitionData
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RAttributeDefinitionData_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RAttributeDefinitionData
    // Function: setFlag
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFlag
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
            
    // Class: RAttributeDefinitionData
    // Function: getFlag
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFlag
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isValid
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: isSane
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSane
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getBoundingBox
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBox
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getRotatedBoundingBox
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getRotatedBoundingBox
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: sync
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sync
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getPointOnEntity
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointOnEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getEndPoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEndPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getMiddlePoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMiddlePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getCenterPoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCenterPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getPointsWithDistanceToEnd
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
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
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getDistanceTo
    // Source: RTextBasedData
    // Static: false
    // Parameters: 5
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: intersectsWith
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intersectsWith
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getPosition
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setPosition
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getAlignmentPoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAlignmentPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setAlignmentPoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignmentPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getFontName
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFontName
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setFontName
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getFontFile
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFontFile
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setFontFile
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontFile
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isBold
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBold
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setBold
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBold
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isItalic
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isItalic
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setItalic
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItalic
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getTextHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setTextHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getTextWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setTextWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setVAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVAlign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getVAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVAlign
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setHAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHAlign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getHAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHAlign
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setDrawingDirection
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDrawingDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getDrawingDirection
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDrawingDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setLineSpacingStyle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineSpacingStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getLineSpacingStyle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineSpacingStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setLineSpacingFactor
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineSpacingFactor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getLineSpacingFactor
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineSpacingFactor
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setAngle
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: getAngle
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: setXScale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setXScale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getXScale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getXScale
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setSimple
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSimple
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isSimple
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSimple
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setBackward
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackward
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isBackward
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBackward
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setUpsideDown
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUpsideDown
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isUpsideDown
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpsideDown
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setDimensionLabel
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimensionLabel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isDimensionLabel
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDimensionLabel
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setSelected
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setHighlighted
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHighlighted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isHighlighted
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isHighlighted
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getReferencePoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getReferencePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: moveReferencePoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveReferencePoint
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
            
    // Class: RAttributeDefinitionData
    // Function: move
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: rotate
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: scale
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: mirror
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: flipHorizontal
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: flipVertical
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: getText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getText
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getPlainText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPlainText
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getEscapedText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEscapedText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getMainFont
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMainFont
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: update
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isDirty
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDirty
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getPainterPaths
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPainterPaths
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
            
    // Class: RAttributeDefinitionData
    // Function: getShapes
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getShapes
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
            
    // Class: RAttributeDefinitionData
    // Function: getExploded
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExploded
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getClosestShape
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestShape
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
            
    // Class: RAttributeDefinitionData
    // Function: getClosestPointOnEntity
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestPointOnEntity
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
            
    // Class: RAttributeDefinitionData
    // Function: getTextLayouts
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextLayouts
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getSimpleTextBlocks
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getSimpleTextBlocks
              (

                
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: to2D
    // Source: RTextBasedData
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
            
    // Class: RAttributeDefinitionData
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getType
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getTag
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTag
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setTag
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTag
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getPrompt
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPrompt
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setPrompt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrompt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: isInvisible
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInvisible
              (

                
              )
              
                const
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: setInvisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInvisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAttributeDefinitionData
    // Function: getRenderedText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getRenderedText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            
              if (wrapped!=nullptr) {
                
                    delete wrapped;
                  
                wrapped = nullptr;
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
          return RJSType_RAttributeDefinitionData::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RAttributeDefinitionData* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RAttributeDefinitionData* getWrapped() const {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          
            return wrapped!=nullptr 
          
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
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:

        
          // wrapped object:
          RAttributeDefinitionData* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RAttributeDefinitionData*> basecasters_RAttributeDefinitionData;

      public:
        static void registerBasecaster_RAttributeDefinitionData(RJSBasecaster_RAttributeDefinitionData* bc) {
          basecasters_RAttributeDefinitionData.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RAttributeDefinitionData_Wrapper*)

    Q_DECLARE_INTERFACE(RAttributeDefinitionData_Wrapper, "org.qcad.RAttributeDefinitionData_Wrapper")

  
  #endif
  
