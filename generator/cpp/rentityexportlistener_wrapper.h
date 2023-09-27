
  // Auto generated
  
    #ifndef RENTITYEXPORTLISTENER_H_WRAPPER
    #define RENTITYEXPORTLISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RExporter.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "REntityExportListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for REntityExportListener
    class REntityExportListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      REntityExportListener_Wrapper(const REntityExportListener_Wrapper&);

    public:
      // initialization of REntityExportListener:
      static void init(RJSApi& handler);

      
        static REntityExportListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_REntityExportListener.length(); i++) {
            RJSBasecaster_REntityExportListener* basecaster = basecasters_REntityExportListener[i];
            REntityExportListener* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_REntityExportListener::getIdStatic()) {
            return (REntityExportListener*)vp;
          }

          qWarning() << "REntityExportListener_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static REntityExportListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_REntityExportListener*: wrapper wraps NULL";
          }

          REntityExportListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "REntityExportListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          REntityExportListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            REntityExportListener_Wrapper(RJSApi& h, REntityExportListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~REntityExportListener_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: REntityExportListener
    // Function: registerCustomProperty
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerCustomProperty
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
            
    // Class: REntityExportListener
    // Function: checkCustomProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  checkCustomProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: REntityExportListener
    // Function: exportEntity
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportEntity
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
          return RJSType_REntityExportListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        REntityExportListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        REntityExportListener* getWrapped() const {
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
        REntityExportListener* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_REntityExportListener*> basecasters_REntityExportListener;

      public:
        static void registerBasecaster_REntityExportListener(RJSBasecaster_REntityExportListener* bc) {
          basecasters_REntityExportListener.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(REntityExportListener_Wrapper*)

    Q_DECLARE_INTERFACE(REntityExportListener_Wrapper, "org.qcad.REntityExportListener_Wrapper")

  
  #endif
  
