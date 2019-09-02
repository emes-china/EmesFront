leipiFormDesign = {
  /*执行控件*/
  exec: function(method) {
    ue.execCommand(method);
  },
  /*
        Javascript 解析表单
        template 表单设计器里的Html内容
        fields 字段总数
    */
  parse_form: function(template, fields) {
    //正则  radios|checkboxs|select 匹配的边界 |--|  因为当使用 {} 时js报错
    var preg = /(\|-<span(((?!<span).)*leipiplugins=\"(radios|checkboxs|select)\".*?)>(.*?)<\/span>-\||<(img|input|textarea|select).*?(<\/select>|<\/textarea>|\/>))/gi,
      preg_attr = /(\w+)=\"(.?|.+?)\"/gi,
      preg_group = /<input.*?\/>/gi;
    if (!fields) fields = 0;

    var template_parse = template,
      template_data = new Array(),
      add_fields = new Object(),
      checkboxs = 0;

    var pno = 0;
    template.replace(preg, function(plugin, p1, p2, p3, p4, p5, p6) {
      var parse_attr = new Array(),
        attr_arr_all = new Object(),
        name = '',
        select_dot = '',
        is_new = false;
      var p0 = plugin;
      var tag = p6 ? p6 : p4;
      //alert(tag + " \n- t1 - "+p1 +" \n-2- " +p2+" \n-3- " +p3+" \n-4- " +p4+" \n-5- " +p5+" \n-6- " +p6);

      if (tag == 'radios' || tag == 'checkboxs') {
        plugin = p2;
      } else if (tag == 'select') {
        plugin = plugin.replace('|-', '');
        plugin = plugin.replace('-|', '');
      }
      plugin.replace(preg_attr, function(str0, attr, val) {
        if (attr == 'name') {
          return;
        }
        if (attr == 'title') {
          //如果是title，强制转成name
          if (!attr_arr_all['name']) attr_arr_all['name'] = val;
          parse_attr.push({ name: val });
          name = val;
        }

        if (tag == 'select' && attr == 'value') {
          if (!attr_arr_all[attr]) attr_arr_all[attr] = '';
          attr_arr_all[attr] += select_dot + val;
          select_dot = ',';
        } else {
          attr_arr_all[attr] = val;
        }
        var oField = new Object();
        oField[attr] = val;
        parse_attr.push(oField);
      });
      /*alert(JSON.stringify(parse_attr));return;*/
      if (tag == 'checkboxs') {
        /*复选组  多个字段 */ plugin = p0;
        plugin = plugin.replace('|-', '');
        plugin = plugin.replace('-|', '');
        var name = 'checkboxs_' + checkboxs;
        attr_arr_all['parse_name'] = name;
        attr_arr_all['name'] = '';
        attr_arr_all['value'] = '';

        attr_arr_all['content'] = '<span leipiplugins="checkboxs"  title="' + attr_arr_all['title'] + '">';
        var dot_name = '',
          dot_value = '';
        p5.replace(preg_group, function(parse_group) {
          var is_new = false,
            option = new Object();
          parse_group.replace(preg_attr, function(str0, k, val) {
            if (k == 'name') {
              if (val == 'leipiNewField') {
                is_new = true;
                fields++;
                val = 'data_' + fields;
              }

              attr_arr_all['name'] += dot_name + val;
              dot_name = ',';
            } else if (k == 'value') {
              attr_arr_all['value'] += dot_value + val;
              dot_value = ',';
            }
            option[k] = val;
          });

          if (!attr_arr_all['options']) attr_arr_all['options'] = new Array();
          attr_arr_all['options'].push(option);
          //if(!option['checked']) option['checked'] = '';
          var checked = option['checked'] != undefined ? 'checked="checked"' : '';
          attr_arr_all['content'] +=
            '<input type="checkbox" name="' +
            option['name'] +
            '" value="' +
            option['value'] +
            '"  ' +
            checked +
            '/>' +
            option['value'] +
            '&nbsp;';

          if (is_new) {
            var arr = new Object();
            arr['name'] = option['name'];
            arr['leipiplugins'] = attr_arr_all['leipiplugins'];
            add_fields[option['name']] = arr;
          }
        });
        attr_arr_all['content'] += '</span>';

        //parse
        template = template.replace(plugin, attr_arr_all['content']);
        template_parse = template_parse.replace(plugin, '{' + name + '}');
        template_parse = template_parse.replace('{|-', '');
        template_parse = template_parse.replace('-|}', '');
        template_data[pno] = attr_arr_all;
        checkboxs++;
      } else if (name) {
        if (tag == 'radios') {
          /*单选组  一个字段*/ plugin = p0;
          plugin = plugin.replace('|-', '');
          plugin = plugin.replace('-|', '');
          attr_arr_all['value'] = '';
          attr_arr_all['content'] =
            '<span leipiplugins="radios" name="' + attr_arr_all['name'] + '" title="' + attr_arr_all['title'] + '">';
          var dot = '';
          p5.replace(preg_group, function(parse_group) {
            var option = new Object();
            parse_group.replace(preg_attr, function(str0, k, val) {
              if (k == 'value') {
                attr_arr_all['value'] += dot + val;
                dot = ',';
              }
              option[k] = val;
            });
            option['name'] = attr_arr_all['name'];
            if (!attr_arr_all['options']) attr_arr_all['options'] = new Array();
            attr_arr_all['options'].push(option);
            //if(!option['checked']) option['checked'] = '';
            var checked = option['checked'] != undefined ? 'checked="checked"' : '';
            attr_arr_all['content'] +=
              '<input type="radio" name="' +
              attr_arr_all['name'] +
              '" value="' +
              option['value'] +
              '"  ' +
              checked +
              '/>' +
              option['value'] +
              '&nbsp;';
          });
          attr_arr_all['content'] += '</span>';
        } else {
          attr_arr_all['content'] = is_new ? plugin.replace(/leipiNewField/, name) : plugin;
        }
        //attr_arr_all['itemid'] = fields;
        //attr_arr_all['tag'] = tag;
        template = template.replace(plugin, attr_arr_all['content']);
        template_parse = template_parse.replace(plugin, '{' + name + '}');
        template_parse = template_parse.replace('{|-', '');
        template_parse = template_parse.replace('-|}', '');
        if (is_new) {
          var arr = new Object();
          arr['name'] = name;
          arr['leipiplugins'] = attr_arr_all['leipiplugins'];
          add_fields[arr['name']] = arr;
        }
        template_data[pno] = attr_arr_all;
      }
      pno++;
    });
    var parse_form = new Object({
      Fields: fields, //总字段数
      Content: template, //完整html
      ContentParse: template_parse, //控件替换为{data_1}的html
      ContentData: JSON.stringify(template_data), //控件属性
      add_fields: add_fields, //新增控件
    });
    return parse_form;
  },
  /*type  =  save 保存设计 versions 保存版本  close关闭 */
  fnCheckForm: function(type) {
    if (ue.queryCommandState('source')) ue.execCommand('source'); //切换到编辑模式才提交，否则有bug

    if (ue.hasContents()) {
      ue.sync(); /*同步内容*/

      return false;
    } else {
      layer.msg('表单内容不能为空！');
      $('#submitbtn').button('reset');
      return false;
    }
  },
  /*预览表单*/
  fnReview: function() {
    if (ue.queryCommandState('source')) ue.execCommand('source'); /*切换到编辑模式才提交，否则部分浏览器有bug*/
    if (ue.hasContents()) {
      ue.sync(); /*同步内容*/
      //--------------以下仅参考-------------------------------------------------------------------
      /*设计form的target 然后提交至一个新的窗口进行预览*/
      var fields = $('#Fields').val(),
        formeditor = '';

      //获取表单设计器里的内容
      formeditor = ue.getContent();
      //解析表单设计器控件
      var parse_form = this.parse_form(formeditor, fields);

      var forms1 = parse_form.Content;
      win_parse = window.open('', '', 'width=800,height=400,alwaysRaised=yes,top=100,left=200');
      var str = '<div style="width:500px;height:300px;border:1px solid grey">' + forms1 + '</div>';
      win_parse.document.write(forms1);
      win_parse.focus();
    } else {
      alert('表单内容不能为空！');
      return false;
    }
  },
};
