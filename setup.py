# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in lc/__init__.py
from lc import __version__ as version

setup(
	name='lc',
	version=version,
	description='customization for lc company',
	author='GreyCube Technologies',
	author_email='admin@greycube.in',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
