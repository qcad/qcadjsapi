
  // Auto generated
  
    #ifndef RTRANSLATION_H_WRAPPER
    #define RTRANSLATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RTranslation.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RTranslation
    class QCADJSAPI_EXPORT 
     RTranslation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RTranslation_Wrapper(const RTranslation_Wrapper&);

    public:
      // initialization of RTranslation:
      static void init(RJSApi& handler);

      
        static RTranslation* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RTranslation:
          for (int i=0; i<basecasters_RTranslation.length(); i++) {
            RJSBasecaster_RTranslation* basecaster = basecasters_RTranslation[i];
            RTranslation* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RTranslation:
          if (t==RJSType_RTranslation::getIdStatic()) {
            return (RTranslation*)vp;
          }

          qWarning() << "RTranslation_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RTranslation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RTranslation*: wrapper wraps NULL";
          }

          RTranslation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RTranslation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RTranslation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RTranslation_Wrapper(RJSApi& h, RTranslation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RTranslation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RTranslation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RTranslation_Wrapper
                
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
            

    // non-static functions:
    
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
          return RJSType_RTranslation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RTranslation* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RTranslation* getWrapped() const {
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
        RTranslation* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RTranslation*> basecasters_RTranslation;

      public:
        static void registerBasecaster_RTranslation(RJSBasecaster_RTranslation* bc) {
          basecasters_RTranslation.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RTranslation_Wrapper*)

    Q_DECLARE_INTERFACE(RTranslation_Wrapper, "org.qcad.RTranslation_Wrapper")

  
  #endif
  
