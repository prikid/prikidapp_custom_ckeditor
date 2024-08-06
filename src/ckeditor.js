/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import { LinkImage } from '@ckeditor/ckeditor5-link';

import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Font from '@ckeditor/ckeditor5-font/src/font';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

// we need to import content CSS files to compile a content.css for using outside the editor
import '@ckeditor/ckeditor5-image/dist/index-content.css';
import '@ckeditor/ckeditor5-essentials/dist/index-content.css';
import '@ckeditor/ckeditor5-autoformat/dist/index-content.css';
import '@ckeditor/ckeditor5-basic-styles/dist/index-content.css';
import '@ckeditor/ckeditor5-heading/dist/index-content.css';
import '@ckeditor/ckeditor5-link/dist/index-content.css';
import '@ckeditor/ckeditor5-indent/dist/index-content.css';
import '@ckeditor/ckeditor5-list/dist/index-content.css';
import '@ckeditor/ckeditor5-media-embed/dist/index-content.css';
import '@ckeditor/ckeditor5-paragraph/dist/index-content.css';
import '@ckeditor/ckeditor5-paste-from-office/dist/index-content.css';
import '@ckeditor/ckeditor5-table/dist/index-content.css';
import '@ckeditor/ckeditor5-typing/dist/index-content.css';
import '@ckeditor/ckeditor5-alignment/dist/index-content.css';
import '@ckeditor/ckeditor5-font/dist/index-content.css';
import '@ckeditor/ckeditor5-remove-format/dist/index-content.css';
import '@ckeditor/ckeditor5-upload/dist/index-content.css';

import {
	AutoImage,
	ImageBlock,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResizeEditing,
	ImageResizeHandles, ImageTextAlternative
} from '@ckeditor/ckeditor5-image';
import { TableCaption, TableCellProperties, TableColumnResize, TableProperties } from '@ckeditor/ckeditor5-table';
import { Undo } from '@ckeditor/ckeditor5-undo';
import FullScreen from "ckeditor5-full-screen/src/fullscreen";

export default class PrikidEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
PrikidEditor.builtinPlugins = [
	AutoImage,
	Essentials,
	SimpleUploadAdapter,
	Autoformat,
	Bold,
	Italic,
	// BlockQuote,
	Heading,

	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageResizeEditing,
	ImageResizeHandles,
	LinkImage,

	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,

	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,

	TextTransformation,
	Alignment,
	Underline,
	Strikethrough,
	IndentBlock,
	Font,
	RemoveFormat,

	Undo,

	FullScreen
];

// Editor configuration.
PrikidEditor.defaultConfig = {

	fontSize: {
		options: [ 9, 10, 11, 12, 14, 'default', 16, 18, 24, 36, 48 ],
		supportAllValues: true
	},

	toolbar: {
		items: [
			'fullscreen',
			'mediaEmbed', 'insertImage',
			'heading', 'bold', 'italic', 'underline', 'strikethrough',
			'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
			'alignment', 'outdent', 'indent',
			'numberedList', 'bulletedList',
			'link', 'insertTable',
			'removeFormat', 'undo', 'redo'
		]
	},

	mediaEmbed: {
		previewsInData: true
	},

	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'linkImage',
			'toggleImageCaption',
			'imageTextAlternative',
		]
	},

	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
