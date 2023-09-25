

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RTOOLMATRIXITEMDELEGATE_H_BASE
  #define RTOOLMATRIXITEMDELEGATE_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RToolMatrixItemDelegate.h"
      
    // Base class for RToolMatrixItemDelegate
      class RToolMatrixItemDelegate_Base : public RToolMatrixItemDelegate {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RToolMatrixItemDelegate
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
RToolMatrixItemDelegate_Base
        
      (

        
          RJSApi& _h
          
            ,
          QTreeView* view, QWidget* parent
      )
      
        : RToolMatrixItemDelegate(
          view, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RToolMatrixItemDelegate_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  