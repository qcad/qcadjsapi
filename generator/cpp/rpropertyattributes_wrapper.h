
  // Auto generated
  
    #ifndef RPROPERTYATTRIBUTES_H_WRAPPER
    #define RPROPERTYATTRIBUTES_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RPropertyAttributes.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RPropertyAttributes
    class QCADJSAPI_EXPORT 
     RPropertyAttributes_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RPropertyAttributes_Wrapper(const RPropertyAttributes_Wrapper&);

    public:
      // initialization of RPropertyAttributes:
      static void init(RJSApi& handler);

      
        static RPropertyAttributes* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RPropertyAttributes:
          for (int i=0; i<basecasters_RPropertyAttributes.length(); i++) {
            RJSBasecaster_RPropertyAttributes* basecaster = basecasters_RPropertyAttributes[i];
            RPropertyAttributes* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RPropertyAttributes:
          if (t==RJSType_RPropertyAttributes::getIdStatic()) {
            return (RPropertyAttributes*)vp;
          }

          qWarning() << "RPropertyAttributes_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RPropertyAttributes* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RPropertyAttributes*: wrapper wraps NULL";
          }

          RPropertyAttributes* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RPropertyAttributes*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RPropertyAttributes_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RPropertyAttributes_Wrapper(RJSApi& h, RPropertyAttributes* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RPropertyAttributes_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RPropertyAttributes
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RPropertyAttributes_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RPropertyAttributes
    // Function: setOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOption
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
            
    // Class: RPropertyAttributes
    // Function: isReadOnly
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isReadOnly
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setReadOnly
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setReadOnly
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
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
            
    // Class: RPropertyAttributes
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
            
    // Class: RPropertyAttributes
    // Function: isUndeletable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUndeletable
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setUndeletable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUndeletable
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isList
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setList
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isAngleType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAngleType
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setAngleType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAngleType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: getIgnoreCase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIgnoreCase
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setIgnoreCase
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIgnoreCase
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: affectsOtherProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  affectsOtherProperties
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setAffectsOtherProperties
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAffectsOtherProperties
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setAllowMixedValue
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAllowMixedValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: getAllowMixedValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAllowMixedValue
              (

                
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: getChoices
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getChoices
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setChoices
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setChoices
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: hasChoices
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChoices
              (

                
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isRichText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRichText
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setRichText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRichText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: mixWith
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mixWith
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isMixed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isMixed
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setMixed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMixed
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isSum
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSum
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setSum
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSum
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isOnRequest
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isOnRequest
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setOnRequest
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOnRequest
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isLabel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isLabel
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isCustom
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCustom
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isDimensionLabel
    // Source: 
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
            
    // Class: RPropertyAttributes
    // Function: setInteger
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInteger
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isInteger
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInteger
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isRedundant
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRedundant
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setRedundant
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRedundant
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isVisibleToParent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisibleToParent
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isNumericallySorted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNumericallySorted
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setNumericallySorted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNumericallySorted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isScaleType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isScaleType
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setScaleType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setScaleType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isAreaType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAreaType
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setAreaType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAreaType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isUnitLess
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUnitLess
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setUnitLess
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUnitLess
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyAttributes
    // Function: isPercentage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPercentage
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: getLabel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLabel
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyAttributes
    // Function: setLabel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLabel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_RPropertyAttributes::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RPropertyAttributes* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RPropertyAttributes* getWrapped() const {
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
        RPropertyAttributes* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RPropertyAttributes*> basecasters_RPropertyAttributes;

      public:
        static void registerBasecaster_RPropertyAttributes(RJSBasecaster_RPropertyAttributes* bc) {
          basecasters_RPropertyAttributes.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RPropertyAttributes_Wrapper*)

    Q_DECLARE_INTERFACE(RPropertyAttributes_Wrapper, "org.qcad.RPropertyAttributes_Wrapper")

  
  #endif
  
