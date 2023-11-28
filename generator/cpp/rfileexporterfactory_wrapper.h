
  // Auto generated
  
    #ifndef RFILEEXPORTERFACTORY_H_WRAPPER
    #define RFILEEXPORTERFACTORY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RFileExporter.h"
      
        #include "RMessageHandler.h"
      
        #include "RProgressHandler.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RFileExporterFactory.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RFileExporterFactory
    class QCADJSAPI_EXPORT 
     RFileExporterFactory_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RFileExporterFactory_Wrapper(const RFileExporterFactory_Wrapper&);

    public:
      // initialization of RFileExporterFactory:
      static void init(RJSApi& handler);

      
        static RFileExporterFactory* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RFileExporterFactory:
          for (int i=0; i<basecasters_RFileExporterFactory.length(); i++) {
            RJSBasecaster_RFileExporterFactory* basecaster = basecasters_RFileExporterFactory[i];
            RFileExporterFactory* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RFileExporterFactory:
          if (t==RJSType_RFileExporterFactory::getIdStatic()) {
            return (RFileExporterFactory*)vp;
          }

          qWarning() << "RFileExporterFactory_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RFileExporterFactory* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RFileExporterFactory*: wrapper wraps NULL";
          }

          RFileExporterFactory* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RFileExporterFactory*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RFileExporterFactory_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RFileExporterFactory_Wrapper(RJSApi& h, RFileExporterFactory* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RFileExporterFactory_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RFileExporterFactory
    // Function: getFilterStrings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFilterStrings
              (

                
              )
              
              ;
            
    // Class: RFileExporterFactory
    // Function: canExport
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canExport
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
            
    // Class: RFileExporterFactory
    // Function: instantiate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  instantiate
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
          return RJSType_RFileExporterFactory::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RFileExporterFactory* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RFileExporterFactory* getWrapped() const {
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
        RFileExporterFactory* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RFileExporterFactory*> basecasters_RFileExporterFactory;

      public:
        static void registerBasecaster_RFileExporterFactory(RJSBasecaster_RFileExporterFactory* bc) {
          basecasters_RFileExporterFactory.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RFileExporterFactory_Wrapper*)

    Q_DECLARE_INTERFACE(RFileExporterFactory_Wrapper, "org.qcad.RFileExporterFactory_Wrapper")

  
  #endif
  
